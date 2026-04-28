// Cookie-based sessions signed with HMAC-SHA256 — no DB required.
// Uses Web Crypto API: works in Next.js Edge Runtime (middleware) AND Node.js API routes.

export const COOKIE_NAME = 'auth_session';
export const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days in seconds

interface Payload {
  username: string;
  exp: number;
}

function b64urlEncode(buf: ArrayBuffer | Uint8Array): string {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

function b64urlDecode(str: string): Uint8Array {
  const raw = atob(str.replace(/-/g, '+').replace(/_/g, '/'));
  const bytes = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
  return bytes;
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  );
}

export async function createSessionToken(username: string): Promise<string> {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error('AUTH_SECRET env var is not set');

  const payload = b64urlEncode(
    new TextEncoder().encode(
      JSON.stringify({ username, exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE } satisfies Payload),
    ),
  );
  const key = await hmacKey(secret);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
  return `${payload}.${b64urlEncode(sig)}`;
}

export async function verifySessionToken(token: string): Promise<string | null> {
  const secret = process.env.AUTH_SECRET;
  if (!secret) return null;

  const dot = token.lastIndexOf('.');
  if (dot === -1) return null;

  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);

  try {
    const key = await hmacKey(secret);
    const valid = await crypto.subtle.verify(
      'HMAC',
      key,
      b64urlDecode(sig),
      new TextEncoder().encode(payload),
    );
    if (!valid) return null;

    const data = JSON.parse(new TextDecoder().decode(b64urlDecode(payload))) as Payload;
    if (data.exp < Math.floor(Date.now() / 1000)) return null;
    return data.username;
  } catch {
    return null;
  }
}

export function validateCredentials(username: string, password: string): boolean {
  const raw = process.env.AUTH_USERS ?? '';
  for (const entry of raw.split(',').filter(Boolean)) {
    const sep = entry.indexOf(':');
    if (sep === -1) continue;
    const u = entry.slice(0, sep).trim();
    const p = entry.slice(sep + 1).trim();
    if (u === username && p === password) return true;
  }
  return false;
}
