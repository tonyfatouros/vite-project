import React from 'react'

const Header = () => {
  return (
    <div><h2>Hello</h2>{import.meta.env.VITE_API_URL}</div>
  )
}

export default Header