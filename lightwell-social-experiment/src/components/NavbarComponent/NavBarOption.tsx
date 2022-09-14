import React from 'react'
import "./NavBarOption.css";

function NavBarOption(props : any) {
  return (
    <div className={`navBarOption ${props.active && 'navBarOptionActive'}`}>
        <props.Icon></props.Icon>
        <h2> {props.text} </h2>
    </div>
  )
}

export default NavBarOption