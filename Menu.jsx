import React from 'react'
import { Link } from 'react-router'

const Menu = () => {
  return (
    <div>
      {/* <a href="/home">Home</a> || */}
      <Link to={"/home"}>Home</Link> ||
      <a href="/about">About</a> ||
        <a href='/about/a1'>About1</a> ||
        <a href='/about/a2'>About2</a> ||
      <a href="/contact">Contact</a>
    </div>
  )
}
export default Menu
