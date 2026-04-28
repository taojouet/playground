import fs from 'fs';
import path from 'path';
import type { IncomingMessage } from 'http';

export function logLogin(username: string, req: IncomingMessage) {
  const ts = new Date().toISOString();
  const ip =
    (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim() ??
    req.socket?.remoteAddress ??
    'unknown';
  const ua = (req.headers['user-agent'] as string | undefined) ?? 'unknown';
  const line = `[${ts}] LOGIN user="${username}" ip=${ip} userAgent="${ua}"\n`;

  console.log('[AUTH]', line.trim());

  try {
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    fs.appendFileSync(path.join(dataDir, 'auth.log'), line);
  } catch {
    // Log write failure is non-critical
  }
}
