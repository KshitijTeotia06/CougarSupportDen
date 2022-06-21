import React from 'react'
import './sideNavBar.css'

export default function sideNavBar(props) {

  const sideTitles = props.sideTitles;


  

  
  return (
    <div className="sidenav">
        {/* <a href="#about">What is SEA?</a>
        <a href="#about"  style = {{color: "#1CB68B"}}>Guides</a>
        <a href="#about"> &emsp; Family</a>
        <a href="#about"> &emsp; Identify</a> */}

        {
          sideTitles.map((titl) => (
              <a key = {titl.key} href = "#about" style = {{color: titl.isbold && "#1CB68B", marginLeft: titl.tab && "20px"}}>
                {/* {titl.tab ? ("\u00a0 \u00a0 \u00a0") : ("")} */}
                {titl.text}</a>
          ))
        }
    </div>
  )
}
