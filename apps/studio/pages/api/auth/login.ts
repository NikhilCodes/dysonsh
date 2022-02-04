import axios from 'axios'
import { serialize } from 'cookie'
import { setCookie } from '../../../lib/http'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      let {
        data,
      } = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/v1/auth/login`, req.body)
      setCookie(res, 'utk', data.access_token, {httpOnly: true, path: '/'})
      res.end()
    } catch (err) {
      return res.status(401).json(err)
    }

  } else {
    res.status(404);
  }
}
