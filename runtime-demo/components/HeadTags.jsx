import Head from 'next/head'

export function HeadTags() {
  const title = 'Home | Serving Tokens '
  const desc =
    'Serving Tokens homepage'
  const canonical = 'https://demo.servingtokens.com'
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:site_name" content="Serving Tokens" />
      <meta property="og:url" content={canonical} />

      <meta
        property="og:image"
        content="{favicon.svg}"
      />
      <meta property="og:image:width" content={1200} />
      <meta property="og:image:height" content={630} />

      <meta property="og:type" content={'website'} />

      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@ServingTokens" />
    </Head>
  )
}
