import React from 'react'
import { useStyle } from './style'

function Navbar() {
  const Classes = useStyle()
  const logo = 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
  return (
    <nav className={Classes.nav}>
      <a><strong>NETFLIX</strong></a>
      <strong>Rahul</strong>
    </nav>
  )
}

export default Navbar;