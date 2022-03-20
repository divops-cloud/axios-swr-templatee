import React from 'react'
import Link from 'next/link'

import useRequest from '../../libs/useRequest'
import { UrlObject } from 'url'

export default function Repo() {
  // password
  const PASSWORD =
      typeof window !== 'undefined' ? window.location.pathname.slice(1) : ''
      const ERROR_CHECK =
    typeof window !== 'undefined' ? window.location.pathname.slice(1) : ''
    // redirect location
  const REDIRECT =
    typeof window !== 'undefined' ? window.location.pathname.slice(1) : ''
  const { data } = useRequest<{
    PASSWORD: string
    ERROR_CHECK: boolean
    REDIRECT: UrlObject
  }>({
    url: '/api/data',
    params: { REDIRECT, ERROR_CHECK, PASSWORD }
  })

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{REDIRECT}</h1>
      <h1>{PASSWORD}</h1>
      <h1>{ERROR_CHECK}</h1>
      {data ? (
        <div>
          <p>passwords {data.PASSWORD}</p>
          <p>error checking {data.ERROR_CHECK}</p>
          <p>redirects: {data.REDIRECT}</p>
        </div>
      ) : (
        'loading...'
      )}
      <br />
      <br />
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  )
}
