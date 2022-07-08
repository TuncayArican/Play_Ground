import React from 'react'
import {
  NavbarContainer,
  Logo

} from "./NavbarStyles";

const Nav = () => {
  return (
    <NavbarContainer>
      <Logo to="/home">
        <i>{"<Tuncay the big Chef>"}</i>
        <span>recipe</span>
      </Logo>
      <ul>
        <Logo to="/home">
        <i>About</i>
        </Logo>
        <Logo to="/home">
        <i>Github</i>
        </Logo>
        <Logo to="/home">
        <i>Logout</i>
        </Logo>
      </ul>
    </NavbarContainer>
  )
}

export default Nav