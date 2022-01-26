import axios from 'axios'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const token = req.cookies['utk'];
    try {

      let {
        data,
      } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}/v1/auth/status`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      return res.status(200).json(data)

    } catch (err) {
      return res.status(401).json(err)
    }

  } else {
    res.status(404);
  }
}
