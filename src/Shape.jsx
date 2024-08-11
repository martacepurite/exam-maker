import { useRef, useEffect, useLayoutEffect } from "react"


function Shape({type, sides, units}){
  
    if(type === 'triangle'){
      return (
        <>
        <div className="shape-holder">
        <svg width="220" height="125">
         <text x="0" y="28" font-size="15" transform="rotate(-65 25,30)">{sides[0]} {units}</text>
         <text x="75" y="25" font-size="15" transform="rotate(37, 75,25)">{sides[1]} {units}</text>
         <text x="50" y="107" font-size="15">{sides[2]} {units}</text>

         <text x="25" y="77" font-size="15">{sides[3]}</text>
         <text x="40" y="40" font-size="15">{sides[4]}</text>
         <text x="95" y="80" font-size="15">{sides[5]}</text>
         
        <polygon points="40,5 5,90 150,90"
         fill="none"
         stroke="black"
          stroke-width="3"
        ></polygon>
        <path d="M10,75 C10,75 25,70, 25,90"
         fill="none" stroke="black" stroke-width="2"/>
         <path d="M33,23 C33,23 47,30, 53,17"
         fill="none" stroke="black" stroke-width="2"/>
         <path d="M125,90 C125,90 120,80, 130,75"
         fill="none" stroke="black" stroke-width="2"/>
        </svg>
        </div>
        </>
      )
    }

    if(type === 'right-triangle'){
      return (
        <>
        <div className="shape-holder">
        <svg width="220" height="125">

        <text x="0" y="43" font-size="15" transform="rotate(-90 15,45)">{sides[0]} {units}</text>
         <text x="70" y="29" font-size="15" transform="rotate(33, 70,29)">{sides[1]} {units}</text>
         <text x="55" y="97" font-size="15">{sides[2]} {units}</text>
         
        <polygon points="20,5 20,80 140,80"
         fill="none"
         stroke="black"
          stroke-width="3"
        ></polygon>
        
        </svg>
        </div>
        </>
      )
    }

    
  
    if(type === 'rectangle'){
      return (
        <>
        <div className="shape-holder">
        <svg width="200" height="160">
          <rect width="140" height="90" x="20" y="30"
            fill="none"
            stroke="black"
          stroke-width="3"
          />
          <text x="0" y="80">{sides[0]}</text>
          <text x="165" y="80">{sides[0]}</text>
         <text x="80" y="20">{sides[1]}</text>
         <text x="80" y="145">{sides[1]}</text>
         
          </svg>
        
        </div>
        </>
      )
    }

    if(type === 'square'){
      return (
        <>
        <div className="shape-holder">
        <svg width="200" height="150">
          <rect width="100" height="100" x="20" y="30"
            fill="none"
            stroke="black"
          stroke-width="3"
          />
          <text x="10" y="100" font-size="15" transform="rotate(-90 10,95)">{sides[0]} {units}</text>
          <text x="80" y="55" font-size="15" transform="rotate(90 100,80)">{sides[0]} {units}</text>
          <text x="50" y="25" font-size="15" >{sides[0]} {units}</text>
          <text x="50" y="147" font-size="15" >{sides[0]} {units}</text>
          </svg>
        
        </div>
        </>
      )
    }
  }

export default Shape