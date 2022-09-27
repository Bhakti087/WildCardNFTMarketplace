import React from 'react'
//INTERNAL IMPORT
import Style from './Cards.module.css'
import images from '../../images'

const Cards = () => {
  return (
<div>
      <h1 className={Style.heading}>
        <b>Explore NFT's</b>
      </h1>
    <div className="flex">
      
      <div className='card flex-1 m-3 card-bordered w-96 bg-base-100 shadow-xl'>
        <figure>
          <img src='https://placeimg.com/400/225/arch' alt='cheetah' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Cheetah</h2>
          <p>lorem epsum , write something good here</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
      <div className='card flex-1 m-3 card-bordered w-96 bg-base-100 shadow-xl'>
        <figure>
          <img src='https://placeimg.com/400/225/arch' alt='cheetah' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Cheetah</h2>
          <p>lorem epsum , write something good here</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
      <div className='card flex-1 m-3 card-bordered w-96 bg-base-100 shadow-xl'>
        <figure>
          <img src='https://placeimg.com/400/225/arch' alt='cheetah' />
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
</div>
    
  )
}

export default Cards
