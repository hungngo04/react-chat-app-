import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import {FiUser} from "react-icons/fi"

export const SidebarLeft = () => {
  return (
    <div className='sidebarLeft'>
      <div className="fi-user">
        <FiUser />
      </div>
    </div>
  )
}

export default SidebarLeft
