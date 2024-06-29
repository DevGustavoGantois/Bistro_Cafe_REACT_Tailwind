import React from 'react';

//import data
import { navData } from '../data';

const Nav = () => {
  return (
    <nav className='w-full h-full'>
      <ul className='h-full flex flex-col items-center gap-y-6 lg:mt-8'>
        {navData.map((item, index) => {
          return <li key={index}>
            <a className='text-xl captalize font-primary italic hover:text-dark transition-all duration-300' href={item.href}>{item.name}</a>
          </li>
        })}
      </ul>
    </nav>
  )
}

export default Nav
