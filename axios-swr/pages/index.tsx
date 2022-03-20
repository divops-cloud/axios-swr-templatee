import React from 'react'
import Link from 'next/link'
import CustomLink from '../components/CustomLink';
import "../libs/cookies"

import useRequest from '../libs/useRequest'
import { serialize } from 'cookie'

/**
 * This sets `cookie` on `res` object
 */
export const cookie = (res, name, value, options = {}) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

  if ('maxAge' in options) {
    options.expires = new Date(Date.now() + options.maxAge)
    options.maxAge /= 1000
  }

  res.setHeader('Set-Cookie', serialize(name, String(stringValue), options))
}

/**
 * Adds `cookie` function on `res.cookie` to set cookies for response
 */
const cookies = (handler) => (req, res) => {
  res.cookie = (name, value, options) => cookie(res, name, value, options)

  return handler(req, res)
}

export default function Index() {
  const { data } = useRequest<string[]>({
    url: '/api/data'
  })

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Trending scripts</h1>
      <div>
        {data
          ? data.map(scripts => (
              <p key={scripts}>
                <Link href="/[user]/[repo]" as={`/${scripts}`}>
                  <a>{scripts}</a>
                </Link>
              </p>
            ))
          : 'loading...'}
      </div>
      <div>
        <CustomLink href={undefined}>
          <a href="/api/data?id=api%2Fcookie&password=api%2Fcookie">
            api
          </a>
        </CustomLink>
      </div>
      <div>
        <CustomLink href={undefined}>
          <a href="/api/data?id=api%2Fcookie&password=api%2Fcookie">
            {cookies}
          </a>
        </CustomLink>
      </div>
    </div>
  )
}