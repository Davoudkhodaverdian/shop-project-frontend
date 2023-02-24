// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie';

type Data = {
  status: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  res.setHeader('Set-Cookie', cookie.serialize('shop-token', '', {
    httpOnly: true,
    maxAge: 0,
    sameSite: 'lax',
    path: '/',
    domain: process.env.NODE_ENV === 'development' ? 'localhost' : process.env.NEXT_APP_DOMAIN
    // domain: process.env.NEXT_APP_DOMAIN // just production
  }))
  res.status(200).json({ status: 'success' })
}
