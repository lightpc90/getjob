import React from 'react'
import User from './User'
import Search from './Search'


const Header = () => {
  return (
      <div className='mt-10'>
          <User />
          <Search />
    </div>
  )
}

export default Header