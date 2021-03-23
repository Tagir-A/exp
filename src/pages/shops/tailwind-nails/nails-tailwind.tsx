import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Header } from 'app/components/tailwind/Header'
import { PriceGallery } from 'app/components/tailwind/PriceGallery'

import exampleData from '../../../shop_data/data.json'

const NailsTailwindPage = (): React.ReactNode => {
  const router = useRouter()
  const { pathname } = router
  return (
    <div>
      <Header>
        <Header.Title>Pikinails</Header.Title>
      </Header>
      <PriceGallery>
        {exampleData.map((item) => (
          <Link
            key={item.shop_id}
            href={`/shops/tailwind-nails/products/${item.shop_id}`}
            passHref
          >
            <PriceGallery.Item
              name={item.name}
              price={item.price_without_discount}
              image={item.image}
            />
          </Link>
        ))}
      </PriceGallery>
    </div>
  )
}

export default NailsTailwindPage
