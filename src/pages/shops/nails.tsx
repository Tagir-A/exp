import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import exampleData from '../../shop_data/data.json'

export default function NailsPage(): React.ReactNode {
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
      {exampleData.map((item) => (
        <div key={item.article}>{item.name}</div>
      ))}
    </>
  )
}
