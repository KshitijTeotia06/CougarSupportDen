import React from 'react'
import headerImage from "../assets/images/alumni.svg"


export default function Card() {

  return (
    <div style = {{width: "400px", height: "185px", backgroundColor: "rgba(28, 182, 139, 1)", display: "flex", borderRadius: "15px", alignItems: "center"}}>
        {/* <div> */}
            <img src = {headerImage} style = {{width: "150px", marginLeft: "10px"}}/>
            <div style = {{width: "200px"}}>
                <h1 style = {{marginLeft: "10px"}}>CC1</h1>
                <p style = {{marginLeft: "10px"}}>College De Anza Biology</p>
                <button style = {{marginLeft: "10px"}}>Learn More!</button>
            </div>
        {/* </div> */}

    </div>  
  )
}
