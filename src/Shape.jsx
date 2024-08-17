import { useRef, useEffect, useLayoutEffect, useState } from "react"

function Triangle({sides, units, angles}){

  let pts = "40,5 5,90 150,90"

  const has_units = units!==""

  let x_vals 

  if(has_units){
    x_vals = [0,75,50]
  }else{
    x_vals = [5,85,60]
  }

  const has_side_one = sides[0] !== ""
  const has_side_two = sides[1] !== ""
  const has_side_three = sides[2] !== ""
  const has_side_four = angles[0] !== ""
  const has_side_five = angles[1] !== ""
  const has_side_six = angles[2] !== ""

  let num_of_angles = has_side_four + has_side_five + has_side_six;

  return(
    <>
    <svg width="220" height="125">

    <text x={x_vals[0]} y="28" font-size="15" transform="rotate(-65 25,30)">{sides[0]}</text>
    <text x={x_vals[1]} y="25" font-size="15" transform="rotate(37, 75,25)">{sides[1]}</text>
    <text x={x_vals[2]} y="107" font-size="15">{sides[2]}</text>

    {has_side_one &&
      <text x="18" y="28" font-size="15" transform="rotate(-65 25,30)">{units}</text>
    }
    {has_side_two &&
      <text x="95" y="25" font-size="15" transform="rotate(37, 75,25)">{units}</text>
    }
    {has_side_three &&
      <text x="70" y="107" font-size="15">{units}</text>
    }

    {has_side_four && 
      <>
        <text x="25" y="77" font-size="15">{angles[0]}°</text>
        <path d="M10,75 C10,75 25,70, 25,90"
          fill="none" stroke="black" stroke-width="1"/>
        {has_side_six &&
          <path d="M10,80 C5,80 22,70, 22,90"
          fill="none" stroke="black" stroke-width="1"/>
        }
        
      </>
      
    }

    {has_side_five && 
      <>
        <text x="40" y="42" font-size="15">{angles[1]}°</text>
        <path d="M33,23 C33,23 45,30, 53,17"
      fill="none" stroke="black" stroke-width="1"/>

        {num_of_angles > 1 && 
          <> 
            <path d="M33,20 C33,20 45,27, 51,15"
          fill="none" stroke="black" stroke-width="1"/>

              {num_of_angles > 2 &&
                <path d="M33,26 C33,26 49,33, 56,17"
                fill="none" stroke="black" stroke-width="1"/>
              
              }

          </>
        }
      </>
      
    }

    {has_side_six && 
      <>
        <text x="93" y="84" font-size="15">{angles[2]}°</text>
      <path d="M125,90 C125,90 120,80, 130,75"
      fill="none" stroke="black" stroke-width="1"/>
      </>
      
    }

      <polygon points={pts}
         fill="none"
         stroke="black"
          stroke-width="3"
      ></polygon>
    </svg>
    </>
  )
}

function RightTriangle({sides, units, angles}){

  const has_units = units!==""

  let x_vals 

  if(has_units){
    x_vals = [0,65,55]
  }else{
    x_vals = [13,75,70]
  }

  const has_side_one = sides[0] !== ""
  const has_side_two = sides[1] !== ""
  const has_side_three = sides[2] !== ""
  const has_side_four = angles[0] !== ""
  const has_side_five = angles[1] !== ""

  return (
    <>
      <svg width="220" height="125">

      <text x={x_vals[0]} y="43" font-size="15" transform="rotate(-90 15,45)">{sides[0]}</text>
      <text x={x_vals[1]} y="29" font-size="15" transform="rotate(33, 70,29)">{sides[1]}</text>
      <text x={x_vals[2]} y="97" font-size="15">{sides[2]}</text>


      {has_side_one && 
        <text x="19" y="43" font-size="15" transform="rotate(-90 15,45)">{units}</text>
      }
      {has_side_two && 
        <text x="83" y="29" font-size="15" transform="rotate(33, 70,29)">{units}</text>
      }
      {has_side_three && 
        <text x="73" y="97" font-size="15">{units}</text>
      }

      <polyline points="20,63 35,63 35,80"
      fill="none" stroke="black" stroke-width="1"/>

      {has_side_four && 
        <>
          <text x="25" y="37" font-size="15">{angles[0]}°</text>
        <path d="M20,20 C20,20 30,25, 33,13"
        fill="none" stroke="black" stroke-width="1"/>
        </>
        
      }
      {has_side_five &&
        <>
          <text x="80" y="73" font-size="15">{angles[1]}°</text>
          <path d="M113,80 C113,80 110,72, 118,67"
        fill="none" stroke="black" stroke-width="1"/>
          {has_side_four && 
            <path d="M110,80 C110,80 107,70, 117,65"
            fill="none" stroke="black" stroke-width="1"/>
          
          }
        
        </>
        
      }

      <polygon points="20,5 20,80 140,80"
      fill="none"
      stroke="black"
        stroke-width="3"
      ></polygon>

      </svg>
    </>
  )
}

function Square({sides,units}){

  const has_units = units!==""

  let x_vals 

  if(has_units){
    x_vals = [10,80,50,50]
  }else{
    x_vals = [20,95,65,65]
  }

  const has_side = sides[0] !== ""

  return (
    <>
      <svg width="200" height="150">
          
          <text x={x_vals[0]} y="100" font-size="15" transform="rotate(-90 10,95)">{sides[0]}</text>
          <text x={x_vals[1]} y="55" font-size="15" transform="rotate(90 100,80)">{sides[0]}</text>
          <text x={x_vals[2]} y="25" font-size="15" >{sides[0]}</text>
          <text x={x_vals[3]} y="147" font-size="15" >{sides[0]}</text>

        {has_side && 
          <>
            <text x="20" y="100" font-size="15" transform="rotate(-90 10,95)">{units}</text>
            <text x="90" y="55" font-size="15" transform="rotate(90 100,80)">{units}</text>
            <text x="60" y="25" font-size="15" >{units}</text>
            <text x="60" y="147" font-size="15" >{units}</text>
          </>
        }

          <rect width="100" height="100" x="20" y="30"
            fill="none"
            stroke="black"
          stroke-width="3"
          />
      </svg>
    </>
  )
}

function Rectangle({sides, units}){

  const has_units = units!==""

  let x_vals 

  if(has_units){
    x_vals = [25,145,75,75]
  }else{
    x_vals = [35,155,85,85]
  }

  const has_side_one = sides[0] !== ""
  const has_side_two = sides[1] !== ""

  return (
    <>
      <svg width="200" height="160">
          <rect width="140" height="90" x="20" y="30"
            fill="none"
            stroke="black"
          stroke-width="3"
          />
          <text x={x_vals[0]} y="70" font-size="15" transform="rotate(-90 30,85)">{sides[0]}</text>
          <text x={x_vals[1]} y="70" font-size="15" transform="rotate(90 160,75)">{sides[0]}</text>
         <text x={x_vals[2]} y="25" font-size="15">{sides[1]}</text>
         <text x={x_vals[3]} y="137" font-size="15">{sides[1]}</text>

         {has_side_one && 
          <>
            <text x="35" y="70" font-size="15" transform="rotate(-90 30,85)">{units}</text>
            <text x="155" y="70" font-size="15" transform="rotate(90 160,75)">{units}</text>
          </>
         }
         {has_side_two && 
          <>
            <text x="85" y="25" font-size="15">{units}</text>
            <text x="85" y="137" font-size="15">{units}</text>
          </>
         }

        </svg>
    </>
  )
}

function Rhombus({sides, units, angles}){
  const has_units = units!==""

  let x_vals 

  if(has_units){
    x_vals = [15,92,8,90]
  }else{
    x_vals = [30,100,20,100]
  }

  const has_side_one = sides[0] !== ""
  const has_side_two = angles[0] !== ""
  const has_side_three = angles[1] !== ""

  return (
    <>
      <svg width="200" height="110">

      <text x={x_vals[0]} y="30" font-size="15" transform="rotate(-39 30,30)">{sides[0]}</text>
      <text x={x_vals[1]} y="31" font-size="15" transform="rotate(35 115,30)">{sides[0]}</text>
      <text x={x_vals[2]} y="80" font-size="15" transform="rotate(35 10,90)">{sides[0]}</text>
      <text x={x_vals[3]} y="102" font-size="15" transform="rotate(-35 90,80)">{sides[0]}</text>

          <polygon points="70,5 5,55 70,100 140,55"
            fill="none"
            stroke="black"
          stroke-width="3"
          
          />
         {has_side_one && 
          <>
            <text x="34" y="30" font-size="15" transform="rotate(-39 30,30)">{units}</text>
            <text x="111" y="31" font-size="15" transform="rotate(35 115,30)">{units}</text>
            <text x="27" y="80" font-size="15" transform="rotate(35 10,90)">{units}</text>
            <text x="109" y="102" font-size="15" transform="rotate(-35 90,80)">{units}</text>
            
          </>
         }

         {has_side_two &&
          <>
                <path d="M17,45 C17,45 27,55, 17,64"
              fill="none" stroke="black" stroke-width="1"/>
              <text x="25" y="60" font-size="15">{angles[0]}°</text>

              <path d="M125,45 C125,45 115,55, 125,64"
              fill="none" stroke="black" stroke-width="1"/>
              <text x="95" y="60" font-size="15">{angles[0]}°</text>

              {has_side_three && 
                <>
                  <path d="M14,47 C14,47 24,55, 14,63"
                  fill="none" stroke="black" stroke-width="1"/>

                  <path d="M127,47 C127,47 119,55, 127,63"
                  fill="none" stroke="black" stroke-width="1"/> 
                </>
              }
  
          </>
         
         }

         {has_side_three &&
          <>
              <path d="M60,13 C60,13 70,25, 80,13"
            fill="none" stroke="black" stroke-width="1"/>
            <text x="57" y="35" font-size="15">{angles[1]}°</text>

            <path d="M60,95 C60,95 70,80, 80,95"
            fill="none" stroke="black" stroke-width="1"/>
            <text x="57" y="83" font-size="15">{angles[1]}°</text>
          
          </>
         
         }
        </svg>
    </>
  )
}

function Trapezoid({sides, units, angles}){

  const has_units = units!==""

  let x_vals 

  if(has_units){
    x_vals = [5,55,55,120]
  }else{
    x_vals = [15,65,75,128]
  }

  const has_side_one = sides[0] !== ""
  const has_side_two = sides[1] !== ""
  const has_side_three = sides[2] !== ""
  const has_side_four = sides[3] !== ""
  const has_side_five = angles[0] !== ""
  const has_side_six = angles[1] !== ""
  const has_side_seven = angles[2] !== ""
  const has_side_eight = angles[3] !== ""

  let num_of_angles = has_side_five + has_side_six + has_side_seven + has_side_eight;

  return (
    <>
      <svg width="200" height="130">

      <text x={x_vals[0]} y="50" font-size="15" transform="rotate(-73 18,50)">{sides[0]}</text>
      <text x={x_vals[1]} y="12" font-size="15" >{sides[1]}</text>
      <text x={x_vals[2]} y="111" font-size="15" >{sides[2]}</text>
      <text x={x_vals[3]} y="30" font-size="15" transform="rotate(60 125,50)">{sides[3]}</text>
      
      {has_side_one &&
          <text x="24" y="50" font-size="15" transform="rotate(-73 18,50)">{units}</text>
      }
      {has_side_two &&
        <text x="73" y="12" font-size="15" >{units}</text>
      }
      {has_side_three &&
        <text x="73" y="111" font-size="15" >{units}</text>
      }
      {has_side_four &&
        <text x="140" y="30" font-size="15" transform="rotate(60 125,50)">{units}</text>
      }

      {has_side_five &&
        <>
          <path d="M15,83 C15,83 27,79, 25,95"
          fill="none" stroke="black" stroke-width="1"/>
          <text x="28" y="85" font-size="15">{angles[0]}°</text>
        </>
      }
      {has_side_six && 
        <>
          <path d="M30,30 C30,30 47,33, 45,17"
          fill="none" stroke="black" stroke-width="1"/>
        <text x="40" y="46" font-size="15">{angles[1]}°</text>

          {has_side_five && 
            <path d="M30,33 C30,33 50,35, 48,16"
            fill="none" stroke="black" stroke-width="1"/>
          }
        </>
      }

      {has_side_seven &&
        <>
          <path d="M127,28 C127,28 110,35, 110,17"
          fill="none" stroke="black" stroke-width="1"/>
        <text x="95" y="47" font-size="15">{angles[2]}°</text>

        {has_side_five &&
          <path d="M127,31 C127,31 107,37, 107,17"
          fill="none" stroke="black" stroke-width="1"/>
        }
        {has_side_six &&
          <path d="M127,25 C127,25 113,32, 113,17"
          fill="none" stroke="black" stroke-width="1"/>
        }
        </>
      }

      {has_side_eight &&
        <>
          <path d="M150,95 C150,95 150,80, 162,83"
          fill="none" stroke="black" stroke-width="1"/>
      <text x="120" y="85" font-size="15">{angles[3]}°</text>

          {num_of_angles > 1 &&
            <path d="M153,95 C153,95 153,80, 166,87"
            fill="none" stroke="black" stroke-width="1"/>
          }
          {num_of_angles > 2 &&
            <path d="M147,95 C147,95 146,78, 162,80"
            fill="none" stroke="black" stroke-width="1"/>
          }
          {num_of_angles > 3 &&
            <path d="M156,95 C156,95 156,85, 165,88"
            fill="none" stroke="black" stroke-width="1"/>
          }


        </>
      }

      <polygon points="10,95 35,17 120,17 170,95"
            fill="none"
            stroke="black"
          stroke-width="3"
          
          />

      </svg>
    </>
  )
}


function Shape({type, sides, units, angles}){
  
    if(type === 'triangle'){
      return (
        <>
        <div className="shape-holder">
          <Triangle sides={sides} units={units} angles={angles}/>
        </div>
        </>
      )
    }

    if(type === 'right-triangle'){
      return (
        <>
        <div className="shape-holder">
          <RightTriangle sides={sides} units={units} angles={angles}/>
        </div>
        </>
      )
    }

    if(type === 'rectangle'){
      return (
        <>
        <div className="shape-holder">
        <Rectangle sides={sides} units={units}/>       
        </div>
        </>
      )
    }

    if(type === 'square'){
      return (
        <>
        <div className="shape-holder">
        <Square sides={sides} units={units}/>        
        </div>
        </>
      )
    }

    if(type === 'rhombus'){
      return (
        <>
        <div className="shape-holder">
        <Rhombus sides={sides} units={units} angles={angles}/>       
        </div>
        </>
      )
    }

    if(type === 'trapezoid'){
      return (
        <>
        <div className="shape-holder">
        <Trapezoid sides={sides} units={units} angles={angles}/>
        </div>
        </>
      )
    }

  }

export default Shape