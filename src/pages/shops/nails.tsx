import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import * as contentful from 'contentful'

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
})

export default function NailsPage() {
  async function fetchEntries(): Promise<any[]> {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    return []
    console.log(`Error getting Entries for .`)
  }
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])
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
        ? posts.map((p) => <div key={p.fields.id}>{p.fields.productName}</div>)
        : null}
    </>
  )
}
