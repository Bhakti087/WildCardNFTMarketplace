import React from 'react'
import Style from './HeroSection.module.css'
import images from '../../images'

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>
            <b>Discover, Buy and sell NFTs for the <span>ENDANGERED.</span></b>
          </h1>
          <p>
            A modern and authentic way to invest , raise funds and protect
            animals.
          </p>
          <button class="btn btn-outline btn-primary">Start your search</button>
        </div>
        <div className={Style.heroSection_box_right}>
          <img
            src={images.heroanimals}
            alt='Hero section'
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
