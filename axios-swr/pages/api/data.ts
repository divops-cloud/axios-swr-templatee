import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

// awaits stripe tokens and redirects to portal api urls
export const data = [
  'Password1/Redirectlink1',
  'Password2/Redirectlink2',
  'Password3/Redirectlink3',
  'Password4/Redirect1ink4',
]

export default function api(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.cookie) {
    // a slow endpoint for getting repo data
    axios(`https://api.github.com/repos/${req.query.cookie}`)
      .then(response => response.data)
      .then(data => {
        setTimeout(() => {
          res.json(data)
        }, 2000)
      })

    return
  }
  setTimeout(() => {
    res.json(data)
  }, 2000)
}
