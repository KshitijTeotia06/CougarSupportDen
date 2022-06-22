import React from 'react'
import headerImage from "../assets/images/alumni.svg"


export default function Card() {

  return (
    <div style = {{width: "301px", height: "170px", backgroundColor: "rgba(28, 182, 139, 1)", borderRadius: "15px"}}>
        <div>
            <img src = {headerImage} style = {{width: "150px"}}/>
            <h1>CC1</h1>
        </div>

    </div>  
  )
}
