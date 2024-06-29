import React from 'react'

//import icons
import {FaYoutube, FaFacebookF, FaInstagram, FaPinterestP, FaDiscord,} from 'react-icons/fa';

//import data

const Socials = () => {
  

  return (
    <div className='flex gap-x-[10px] cursor-pointer'>
      <a className='border border-white/20 rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all'>
          <FaYoutube/>
        </a>
        <a className='border border-white/20 rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all'>
          <FaFacebookF/>
        </a>
        <a href='https://www.instagram.com/gucaria_/?hl=pt-br' target='_blank' className='border border-white/20 rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all'>
         <FaInstagram/>
        </a>
        <a className='border border-white/20 rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all'>
          <FaPinterestP/>
        </a>
        <a className='border border-white/20 rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all'>
        <FaDiscord/>
        </a>
    </div>
  )
}

export default Socials
