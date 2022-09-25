import React from 'react'
//connect wallet
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import images from '../../images'

function Navbar() {
  async function connectwallet() {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
      })

      const web3ModalInstance = await web3Modal.connect()
      const web3ModalProvider = new ethers.providers.Web3Provider(
        web3ModalInstance
      )
      console.log(web3ModalProvider)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
           
          </div>
          <a href=''>
            <img
              src={images.WildCardlogo}
              alt='NFT MARKET PLACE'
              width={60}
              height={60}
            />
          </a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <a>VIEW WILDCARD</a>
            </li>
           
            <li>
              <a>CREATE NFT</a>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          <button className='btn btn-secondary'>
            <a onClick={connectwallet}>Connect Wallet</a>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Navbar
