// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie';

type Data = {
  status: string
}

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    token: string
  }
}

export default function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<Data>
) {

  res.setHeader('Set-Cookie', cookie.serialize('shop-token', req.body?.token, {
    httpOnly: true,
    maxAge: 3600 * 24 * 30,
    sameSite: 'lax',
    path: '/',
    domain: process.env.NODE_ENV === 'development' ? 'localhost' : process.env.NEXT_APP_DOMAIN
  }))
  res.status(200).json({ status: 'success' })
}
