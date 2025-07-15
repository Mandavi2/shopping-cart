import Image from 'next/image'
import React from 'react'
import CartButtons from './CartButtons'



const CartItem = ({item, fromCart}) => {
    const {id, name, imageUrl, price} = item
  return (
    <div key={id} className='group relative flex flex-col gap-y-2 border border-zinc-300 rounded-md bg-white p-15'>
        <Image 
        src={imageUrl} 
        alt='product-image' 
        width={280} 
        height={280}
        className={`${!fromCart && "group-hover:-translate-y-2 transition-all"} duration-500`}
        />
        <div className='absolute bottom-3 left-5'>
           <h1 className={`'text-zinc-700 ${fromCart && "text-xs"} mt-2'`}>{name}</h1>
           <span className={`text-pink-400 ${fromCart && "text-sm"} font-medium`}>${price}</span>
        </div>
        <CartButtons item={item} fromCart={fromCart}/>
    </div>
  )
}

export default CartItem