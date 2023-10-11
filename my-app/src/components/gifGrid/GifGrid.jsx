import React from 'react'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { GiftItem } from './GiftItem'

export const GifGrid = ({category}) => {
  const {images, isLoading} = useFetchGifs(category)

  return (
    <div>
        <h3>{category}</h3>
        <div>
          {
            images.map((image, key) => {
              return <GiftItem key={key} {...image}></GiftItem>
            })
          }
        </div>
    </div>
  )
}