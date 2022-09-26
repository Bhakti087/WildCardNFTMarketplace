import React from "react";
//connect wallet
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import images from "../../images";
import { NavLink } from "react-router-dom";
import Style from './Navbar.module.css'

function Navbar() {
  async function connectwallet() {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
      });

      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.providers.Web3Provider(
        web3ModalInstance
      );
      console.log(web3ModalProvider);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={Style.navbar}>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <a href="">
            <img
              src={images.WildCardlogo}
              alt="NFT MARKET PLACE"
              width={60}
              height={60}
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <NavLink to="/">
              <li>
                <h3>VIEW WILDCARD </h3>
              </li>
            </NavLink>
            <NavLink to="/Create">
              <li>
                <h3>CREATE NFT </h3>
              </li>
            </NavLink>
            {/* <li to="/Create">
              <a>CREATE NFT</a>
            </li> */}
            <NavLink>
              <li>
                <h3>YOUR NFTs </h3>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary">
            <a onClick={connectwallet}>Connect Wallet</a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
