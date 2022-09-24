import React from 'react'
import images from "../../images";
import App from '../../App';



// **
import Web3Modal from "web3modal";
import {ethers} from "ethers";

const providerOptions = {

}
// **

function Navbar() {

// **

async function connectwallet(){
  try{
  let web3Modal = new Web3Modal(
  {
    cacheProvider:false,
    providerOptions,
  });

  const web3ModalInstance = await web3Modal.connect();
  const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance);
  console.log(web3ModalProvider);

  }catch(error){
  console.log(error);
  }
}
// **




  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <a href=""><img src={images.WildCardlogo}
              alt="NFT MARKET PLACE"
              width={60}
              height={60} /></a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a>
                Parent
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                >
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </a>
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>VIEW WILDCARD</a>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          <button className='btn btn-primary'><a onClick = {connectwallet} >Connect Wallet</a></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
