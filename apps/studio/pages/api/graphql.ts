import axios from 'axios'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const token = req.cookies['utk'];

    try {
      let { data, status, headers } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/v1/graphql`,
        {
          ...req.body,
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        },
      )
      res.status(status).send(data)

    } catch (err) {
      return res.status(401).json(err)
    }

  } else {
    res.status(404);
  }
}
