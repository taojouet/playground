import type { NextApiRequest, NextApiResponse } from 'next';
import { validateCredentials, createSessionToken, COOKIE_NAME, SESSION_MAX_AGE } from '@/lib/auth-session';
import { logLogin } from '@/lib/auth-log';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { username, password } = req.body as { username?: string; password?: string };
  if (!username || !password) return res.status(400).json({ error: 'Missing fields' });

  if (!validateCredentials(username, password)) {
    return res.status(401).json({ error: 'Identifiants incorrects' });
  }

  logLogin(username, req);

  const token = await createSessionToken(username);
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.setHeader(
    'Set-Cookie',
    `${COOKIE_NAME}=${token}; HttpOnly; SameSite=Lax; Max-Age=${SESSION_MAX_AGE}; Path=/${secure}`,
  );
  return res.status(200).json({ ok: true });
}
