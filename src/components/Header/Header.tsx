import React from 'react'
import NavLink from '@/components/NavLink/NavLink'
import logo from '@/assets/logo.png'

interface IHeaderProps {
  // define your props here
}

const Header: React.FC<IHeaderProps> = ({}) => {
  return (
    <header className="header flex justify-between items-center w-full ">
      <div className="flex px-4">
        <NavLink href="/" img={logo}>
          NEXT LEVEL FOOD
        </NavLink>
      </div>
      <div className="flex justify-end items-center gap-4 px-4">
        <NavLink href="/meals">Browse Meals</NavLink>
        <NavLink href="/community">Foodies Community</NavLink>
      </div>
    </header>
  )
}

export default Header
