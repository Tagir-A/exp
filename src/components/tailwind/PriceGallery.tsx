import React, { ReactElement } from 'react'

interface Props {
  children: React.ReactNode
}

export function PriceGallery({ children }: Props): React.ReactElement {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>{children}</div>
      </div>
    </section>
  )
}

interface PriceGalleryItemProps {
  category?: string | null
  price: string
  name: string
  image?: string
}

const PriceGalleryItem = ({
  category = null,
  href,
  price,
  name,
  image = 'https://dummyimage.com/420x260',
}: PriceGalleryItemProps) => {
  return (
    <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
      <a href={href} className='block relative h-48 rounded overflow-hidden'>
        <img
          alt='ecommerce'
          className=' object-scale-down object-center w-full h-full block'
          src={image}
        />
      </a>
      <div className='mt-4'>
        <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
          {category}
        </h3>
        <h2 className='text-gray-900 title-font text-lg font-medium'>{name}</h2>
        <p className='mt-1'>{price} ₽</p>
      </div>
    </div>
  )
}

PriceGallery.Item = PriceGalleryItem
