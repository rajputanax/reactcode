import React from 'react'

function Header({bgclr , text}) {
    const styled = {
        backgroundColor:bgclr,
        textAlign:'center',
        padding:30,
        color:"white"
    }
  return <>
  <header style={styled}>
    <h1>{text} </h1>
  </header>
  
  </>
    
  
   
}

export default Header