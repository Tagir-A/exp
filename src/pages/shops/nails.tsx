import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import * as contentful from 'contentful'

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
})

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const entries = await client.getEntries()

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      posts: [...entries.items],
    },
  }
}

export default function NailsPage({ posts }: { posts: any[] }) {
  return (
    <>
      <Head>
        <title>Nails</title>
      </Head>
      <h1>Nails</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
      <div>Best nails here!</div>
      {posts.length > 0
        ? posts.map((p) => <div key={p.sys.id}>{p.fields.productName}</div>)
        : null}
    </>
  )
}
