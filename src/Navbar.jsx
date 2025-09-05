import React from 'react'
import MenuIcon from './assets/MenuIcon.svg'
import SearchIcon from './assets/SearchIcon.svg'
import logo from './assets/logo.svg'
import Newsletter from './assets/Newsletter.svg'
import DarkMode from './assets/DarkMode.svg'
import Line from './assets/Line.svg'
import profile from './assets/profile.png'
import { Link } from "react-router-dom";


const Navbar = ({showSignIn}) => {
  return (
    <>
      <div className="w-full relative bg-[#18181b] border-gray-100 border-solid border-b-[1px] box-border overflow-hidden flex flex-row items-center justify-between py-[1.25rem] px-[5rem] gap-[0rem] text-center text-[1.25rem] text-white font-staatliches">
        <div className="flex-1 flex flex-row items-center justify-start gap-[1.5rem]">
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">

            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="cursor-pointer">
                  <img
                    className="w-[2.5rem] h-[2.5rem] rounded-lg bg-gray-100"
                    alt="menu"
                    src={MenuIcon}
                  />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  {/* Sidebar content here */}
                  <li><Link to="/"><img className="w-[14.025rem] relative h-[1.525rem]" alt="" src={logo} /></Link></li>
                  <li><Link to="/review"><div className="relative tracking-[-0.02em] text-3xl leading-[1.5rem]    cursor-pointer 
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-white 
                after:transition-all after:duration-300 
                hover:after:w-full">Trending</div></Link></li>
                  <li><Link to="/exclusive"><div className="relative tracking-[-0.02em] text-3xl  leading-[1.5rem] cursor-pointer 
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-white 
                after:transition-all after:duration-300 
                hover:after:w-full">Exclusives</div></Link></li>
                  <li><Link to="/review"><div className="relative tracking-[-0.02em] text-3xl leading-[1.5rem] cursor-pointer 
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-white 
                after:transition-all after:duration-300 
                hover:after:w-full">Trending</div></Link></li>
                  <li><Link to="/exclusive"><div className="relative tracking-[-0.02em] text-3xl leading-[1.5rem] cursor-pointer 
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-white 
                after:transition-all after:duration-300 
                hover:after:w-full">DC</div></Link></li>
                  <li><Link to="/review"><div className="relative tracking-[-0.02em] text-3xl leading-[1.5rem] cursor-pointer 
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-white 
                after:transition-all after:duration-300 
                hover:after:w-full">Marvel</div></Link></li>
                  <li><Link to="/exclusive"><div className="relative tracking-[-0.02em] text-3xl leading-[1.5rem] cursor-pointer 
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-white 
                after:transition-all after:duration-300 
                hover:after:w-full">Star Wars</div></Link></li>
                  <li><Link to="/review"><div className="relative tracking-[-0.02em] text-3xl leading-[1.5rem]  cursor-pointer 
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-white 
                after:transition-all after:duration-300 
                hover:after:w-full">Invincible</div></Link></li>
                  <li><Link to="/actorpage"><div className="relative tracking-[-0.02em] text-3xl leading-[1.5rem] cursor-pointer 
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-white 
                after:transition-all after:duration-300 
                hover:after:w-full">Hollywood</div></Link></li>
                </ul>
              </div>
            </div>

            <div className="relative leading-[1.75rem]"></div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <div>
              {/* Image trigger */}
              <label htmlFor="my-modal" className="cursor-pointer">
                <img
                  className="w-[2.5rem] h-[2.5rem] rounded-lg bg-gray-100"
                  alt="search"
                  src={SearchIcon}
                />
              </label>

              {/* Modal */}
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h3 className=" text-lg mb-3 h-[22rem] max-h-none">Search</h3>
                  <input
                    type="text"
                    placeholder="Type to search..."
                    className="input input-bordered w-full py-1"
                  />
                  <div className="modal-action">
                    <label htmlFor="my-modal" className="btn ">
                      Close
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative leading-[1.75rem]"></div>
          </div>
        </div>
        <Link to="/"><img className="w-[14.025rem] relative h-[1.525rem]" alt="" src={logo} /></Link>
        
        <div className="flex-1 flex flex-row items-center justify-end gap-[1.5rem]">
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
             <Link to="/actorpage"><img className="w-[2.5rem] rounded-lg h-[2.5rem] bg-gray-100" alt="" src={Newsletter} /></Link>
            
            <div className="relative leading-[1.75rem]">Newsletter</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            
            <img className="w-[2.5rem] rounded-lg h-[2.5rem] bg-gray-100" alt="" src={DarkMode} />
            <div className="relative leading-[1.75rem]">Dark</div>
          </div>


          {showSignIn ? (
          <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-goldenrod flex flex-row items-center justify-end py-[0.375rem] px-[1.5rem] text-black bg-[#d9a32e]">
            {/* <div className="relative leading-[1.75rem] ">Log In</div> */}
             <Link to="/formpage" className='relative leading-[1.75rem]'>Log In</Link>
          </div>):(


<div className="flex flex-row items-center justify-start gap-[0.75rem] text-[0.75rem] text-darkgray font-dm-sans">
<img className="w-[2.5rem] rounded-lg h-[2.5rem] object-cover" alt="" src={profile} />
<div className="flex flex-col items-start justify-center gap-[0.25rem]">
<div className="relative leading-[1rem] font-medium">Welcome Back</div>
<div className="relative text-[0.875rem] leading-[1.25rem] font-medium text-white">MR Wick</div>
</div>
</div>)}



          
        </div>
      </div>
      <div className="w-full relative shadow-[0px_12px_32px_rgba(0,_0,_0,_0.5)] bg-[#111112] overflow-hidden flex flex-row items-center justify-center py-[1.25rem] px-[5rem] box-border gap-[1rem] text-center text-[1rem] text-white font-dm-sans">
        <div className="flex flex-row items-center justify-center text-goldenrod">
           <Link to="/actorpage"><div className="relative tracking-[-0.02em] leading-[1.5rem] text-[#d9a32e]">Trending</div></Link>
          
        </div>
        <img className="self-stretch w-[0rem] relative max-h-full object-contain border-amber-400 " alt="" src={Line} />
        <div className="flex flex-row items-center justify-center">
          <Link to="/exclusive"><div className="relative tracking-[-0.02em] leading-[1.5rem]">Exclusives</div></Link>
          
        </div>
        <img className="self-stretch w-[0rem] relative max-h-full object-contain" alt="" src={Line} />
        <div className="flex flex-row items-center justify-center">
          <Link to="/review"><div className="relative tracking-[-0.02em] leading-[1.5rem]">Trending</div></Link>
          
        </div>
        <img className="self-stretch w-[0rem] relative max-h-full object-contain" alt="" src={Line} />
        <div className="flex flex-row items-center justify-center">
          <Link to="/exclusive"><div className="relative tracking-[-0.02em] leading-[1.5rem]">DC</div></Link>
          
        </div>
        <img className="self-stretch w-[0rem] relative max-h-full object-contain" alt="" src={Line} />
        <div className="flex flex-row items-center justify-center">
          <Link to="/review"><div className="relative tracking-[-0.02em] leading-[1.5rem]">Marvel</div></Link>
          
        </div>
        <img className="self-stretch w-[0rem] relative max-h-full object-contain" alt="" src={Line} />
        <div className="flex flex-row items-center justify-center">
          <Link to="/exclusive"><div className="relative tracking-[-0.02em] leading-[1.5rem]">Star Wars</div></Link>
          
        </div>
        <img className="self-stretch w-[0rem] relative max-h-full object-contain" alt="" src={Line} />
        <div className="flex flex-row items-center justify-center">
          <Link to="/review"><div className="relative tracking-[-0.02em] leading-[1.5rem]">Invincible</div></Link>
          
        </div>
        <img className="self-stretch w-[0rem] relative max-h-full object-contain" alt="" src="Line 7.svg" />
        <div className="flex flex-row items-center justify-center">
          <Link to="/actorpage"><div className="relative tracking-[-0.02em] leading-[1.5rem]">Hollywood</div></Link>
          
        </div>
      </div>
    </>
  )
}

export default Navbar
