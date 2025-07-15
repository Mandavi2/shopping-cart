"use client"

import React, { useEffect } from 'react'
import CartItem from '@/components/CartItem'
import { useCart } from '@/context/cartContext'
import ShoppingCart from '@/components/ShoppingCart'
import { getItemFromStorage, getParsedItemFromStorage } from '@/utilities/LocalStorageFns'

const Page = () => {
  const {allItems, setItems, setCartItemsFromStorage} = useCart();

  useEffect(()=>{
    setItems()

    if(getParsedItemFromStorage('cartItems')?.length !== 0 && getItemFromStorage('cartItems') !== null){
      setCartItemsFromStorage()
    }
  }, [])

  useEffect(()=>{
      console.log(allItems)
  }, [allItems])

  return (
    <div className='grid place-items-center py-20'>
      <h1 className='lg:text-4xl md:text-3xl text-2xl italic text-gray-500 mb-16 px-10 text-center'>Trend Alert: Must-Have Outfits of the Season</h1>
       <ShoppingCart/>
      <div className='grid xl:grid-cols-3 lg:grid-cols-2 place-items-start gap-8 text-gray-700 xl:px-6 px-10'>
        {allItems?.map((item)=>{
          return (
            <CartItem key={item.id} item={item}/>
          )
        })}
      </div>
    </div>
  )
}

export default Page