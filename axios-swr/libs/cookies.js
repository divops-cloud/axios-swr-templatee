import cookie from '../pages/cookie'
import { serialize } from 'cookie'

/**
 * Adds `cookie` function on `res.cookie` to set cookies for response
 */
const cookies = (handler) => (req, res) => {
  res.cookie = (name, value, options) => cookie(res, name, value, options)

  return handler(req, res)
}

const handler = (req, res) => {
  // The cookie middleware will add the `set-cookie` header
  res.cookie('Next.js', 'api-middleware!')
  // Return the `set-cookie` header so we can display it in the browser and show that it works!
  res.end(res.getHeader('Set-Cookie'))
}

export default cookie(handler)