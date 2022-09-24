import React from 'react'
//INTERNAL IMPORT
import Style from './Cards.module.css'
import images from '../../images'

const Cards = () => {
  return (
    <div className={Style.Cards}>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <figure>
          <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Cheetah</h2>
          <p>lorem epsum , write something good here</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
