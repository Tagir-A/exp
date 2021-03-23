import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { promises as fs } from 'fs'
import path from 'path'

import exampleData from 'app/shop_data/data.json'
import { Header } from 'app/components/tailwind/Header'

export async function getStaticPaths() {

  const postsDirectory = path.join(process.cwd(), 'src/shop_data/data.json')
  const rawData = await fs.readFile(postsDirectory, 'utf8')

  const data = JSON.parse(rawData)
  // Get the paths we want to pre-render based on posts
  const paths = data.map((item) => {

    return {
      params: { pid: String(item.shop_id) },
    }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const postsDirectory = path.join(process.cwd(), 'src/shop_data/data.json')
  const rawData = await fs.readFile(postsDirectory, 'utf8')

  const data = JSON.parse(rawData)

  const { params } = context
  const { pid } = params
  const item = data.find(item => String(item.shop_id) === pid)
  console.log('item', item)
  return {
    props: {
      item,
    },
  }
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

const ProductPage = ({ item: currentItem }: Props): JSX.Element => {

  if (!currentItem) {
    return <div>Not found</div>
  }

  return (
    <div>
      <Header>
        <Header.Title>Pikinails</Header.Title>
      </Header>
      <section className="text-gray-600 body-font overflow-hidden">
        <div>{currentItem.name}</div>
      </section>
    </div>
  )
}

export default ProductPage
