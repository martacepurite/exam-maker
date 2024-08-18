import { useRef, useEffect, useLayoutEffect, useState } from "react"

function Triangle({sides, units, angles, letters}){

  let pts = "50,20 15,90 150,90"

  let has_units = units!==""

  let x_vals = [0,75,50]

  if(!has_units){
    x_vals = [15,85,60]
  }

  let has_side_one = sides[0] !== ""
  let has_side_two = sides[1] !== ""
  let has_side_three = sides[2] !== ""
  let has_side_four = angles[0] !== ""
  let has_side_five = angles[1] !== ""
  let has_side_six = angles[2] !== ""

  let num_of_angles = has_side_four + has_side_five + has_side_six;

  return(
    <>
    <svg width="220" height="140">

    <text x="45" y="15" fontSize="15">{letters[0]}</text>
    <text x="0" y="95" fontSize="15">{letters[1]}</text>
    <text x="158" y="95" fontSize="15">{letters[2]}</text>

    <text x={x_vals[0]} y="46" fontSize="15" transform="rotate(-62 30,45)">{sides[0]}</text>
    <text x={x_vals[1]} y="29" fontSize="15" transform="rotate(37, 75,25)">{sides[1]}</text>
    <text x={x_vals[2]} y="107" fontSize="15">{sides[2]}</text>

    {has_side_one &&
      <text x="19" y="46" fontSize="15" transform="rotate(-62 30,45)">{units}</text>
    }
    {has_side_two &&
      <text x="95" y="29" fontSize="15" transform="rotate(37, 75,25)">{units}</text>
    }
    {has_side_three &&
      <text x="70" y="107" fontSize="15">{units}</text>
    }

    {has_side_four && 
      <>
        <text x="33" y="77" fontSize="15">{angles[0]}°</text>
        <path d="M20,78 C20,78 33,76, 30,90"
          fill="none" stroke="black" strokeWidth="1"/>
        {has_side_six &&
          <path d="M20,81 C20,81 29,77, 28,90"
          fill="none" stroke="black" strokeWidth="1"/>
        }
        
      </>
      
    }

    {has_side_five && 
      <>
        <text x="44" y="53" fontSize="15">{angles[1]}°</text>
        <path d="M45,29 C45,29 55,35, 58,27"
      fill="none" stroke="black" strokeWidth="1"/>

        {num_of_angles > 1 && 
          <> 
            <path d="M45,32 C45,32 55,37, 60,29"
          fill="none" stroke="black" strokeWidth="1"/>

              {num_of_angles > 2 &&
                <path d="M43,33 C43,33 55,42, 63,29"
                fill="none" stroke="black" strokeWidth="1"/>
              
              }

          </>
        }
      </>
      
    }

    {has_side_six && 
      <>
        <text x="93" y="84" fontSize="15">{angles[2]}°</text>
      <path d="M125,90 C125,90 120,80, 130,75"
      fill="none" stroke="black" strokeWidth="1"/>
      </>
      
    }

      <polygon points={pts}
         fill="none"
         stroke="black"
          strokeWidth="3"
      ></polygon>
    </svg>
    </>
  )
}

function RightTriangle({sides, units, angles, letters}){

  let has_units = units!==""

  let x_vals = [0,65,55];

  if(!has_units){
    x_vals = [13,85,70]
  }

  let has_side_one = sides[0] !== ""
  let has_side_two = sides[1] !== ""
  let has_side_three = sides[2] !== ""
  let has_side_four = angles[0] !== ""
  let has_side_five = angles[1] !== ""

  return (
    <>
      <svg width="220" height="155">

      <text x="5" y="20" fontSize="15">{letters[0]}</text>
      <text x="5" y="130" fontSize="15">{letters[1]}</text>
      <text x="148" y="130" fontSize="15">{letters[2]}</text>

      <text x={x_vals[0]} y="40" fontSize="15" transform="rotate(-90 33,59)">{sides[0]}</text>
      <text x={x_vals[1]} y="50" fontSize="15" transform="rotate(40, 70,29)">{sides[1]}</text>
      <text x={x_vals[2]} y="135" fontSize="15">{sides[2]}</text>


      {has_side_one && 
        <text x="19" y="40" fontSize="15" transform="rotate(-90 33,59)">{units}</text>
      }
      {has_side_two && 
        <text x="83" y="50" fontSize="15" transform="rotate(40, 70,29)">{units}</text>
      }
      {has_side_three && 
        <text x="74" y="135" fontSize="15">{units}</text>
      }

      <polyline points="20,103 35,103 35,120"
      fill="none" stroke="black" strokeWidth="1"/>

      {has_side_four && 
        <>
          <text x="25" y="67" fontSize="15">{angles[0]}°</text>
        <path d="M20,45 C20,45 33,50, 33,35"
        fill="none" stroke="black" strokeWidth="1"/>
        </>
        
      }
      {has_side_five &&
        <>
          <text x="80" y="113" fontSize="15">{angles[1]}°</text>
          <path d="M113,120 C113,120 110,107, 118,105"
        fill="none" stroke="black" strokeWidth="1"/>
          {has_side_four && 
            <path d="M116,120 C116,120 112,107, 123,105"
            fill="none" stroke="black" strokeWidth="1"/>
          
          }
        
        </>
        
      }

      <polygon points="20,25 20,120 140,120"
      fill="none"
      stroke="black"
        strokeWidth="3"
      ></polygon>

      </svg>
    </>
  )
}

function Square({sides,units, letters}){

  let has_units = units!==""

  let x_vals = [10,80,50,50]

  if(!has_units){
    x_vals = [20,95,65,65]
  }

  let has_side = sides[0] !== ""

  return (
    <>
      <svg width="200" height="150">

        <text x="7" y="27" fontSize="15">{letters[0]}</text>
        <text x="123" y="27" fontSize="15">{letters[1]}</text>
        <text x="125" y="140" fontSize="15">{letters[2]}</text>
        <text x="5" y="141" fontSize="15">{letters[3]}</text>
          
          <text x={x_vals[0]} y="100" fontSize="15" transform="rotate(-90 10,95)">{sides[0]}</text>
          <text x={x_vals[1]} y="55" fontSize="15" transform="rotate(90 100,80)">{sides[0]}</text>
          <text x={x_vals[2]} y="25" fontSize="15" >{sides[0]}</text>
          <text x={x_vals[3]} y="147" fontSize="15" >{sides[0]}</text>

        {has_side && 
          <>
            <text x="20" y="100" fontSize="15" transform="rotate(-90 10,95)">{units}</text>
            <text x="90" y="55" fontSize="15" transform="rotate(90 100,80)">{units}</text>
            <text x="60" y="25" fontSize="15" >{units}</text>
            <text x="60" y="147" fontSize="15" >{units}</text>
          </>
        }

          <rect width="100" height="100" x="20" y="30"
            fill="none"
            stroke="black"
          strokeWidth="3"
          />
      </svg>
    </>
  )
}

function Rectangle({sides, units, letters}){

  let has_units = units!==""

  let x_vals = [25,145,75,75]

  if(!has_units){
    x_vals = [35,155,85,85]
  }

  let has_side_one = sides[0] !== ""
  let has_side_two = sides[1] !== ""

  return (
    <>
      <svg width="200" height="160">

        <text x="5" y="31" fontSize="15">{letters[0]}</text>
        <text x="165" y="31" fontSize="15">{letters[1]}</text>
        <text x="165" y="131" fontSize="15">{letters[2]}</text>
        <text x="5" y="131" fontSize="15">{letters[3]}</text>


          <rect width="140" height="90" x="20" y="30"
            fill="none"
            stroke="black"
          strokeWidth="3"
          />
          <text x={x_vals[0]} y="70" fontSize="15" transform="rotate(-90 30,85)">{sides[0]}</text>
          <text x={x_vals[1]} y="70" fontSize="15" transform="rotate(90 160,75)">{sides[0]}</text>
         <text x={x_vals[2]} y="25" fontSize="15">{sides[1]}</text>
         <text x={x_vals[3]} y="137" fontSize="15">{sides[1]}</text>

         {has_side_one && 
          <>
            <text x="35" y="70" fontSize="15" transform="rotate(-90 30,85)">{units}</text>
            <text x="155" y="70" fontSize="15" transform="rotate(90 160,75)">{units}</text>
          </>
         }
         {has_side_two && 
          <>
            <text x="85" y="25" fontSize="15">{units}</text>
            <text x="85" y="137" fontSize="15">{units}</text>
          </>
         }

        </svg>
    </>
  )
}

function Rhombus({sides, units, angles, letters}){
  let has_units = units!==""

  let x_vals = [20,110,28,90]

  if(!has_units){
    x_vals = [35,130,47,100]
  }

  let has_side_one = sides[0] !== ""
  let has_side_two = angles[0] !== ""
  let has_side_three = angles[1] !== ""

  return (
    <>
      <svg width="200" height="155">

      <text x="0" y="80" fontSize="15">{letters[0]}</text>
      <text x="90" y="11" fontSize="15">{letters[1]}</text>
      <text x="180" y="80" fontSize="15">{letters[2]}</text>
      <text x="90" y="145" fontSize="15">{letters[3]}</text>

      <text x={x_vals[0]} y="50" fontSize="15" transform="rotate(-35 30,30)">{sides[0]}</text>
      <text x={x_vals[1]} y="25" fontSize="15" transform="rotate(38 115,30)">{sides[0]}</text>
      <text x={x_vals[2]} y="90" fontSize="15" transform="rotate(35 10,90)">{sides[0]}</text>
      <text x={x_vals[3]} y="140" fontSize="15" transform="rotate(-35 90,80)">{sides[0]}</text>

          <polygon points="95,15 15,75 95,130 175,75"
            fill="none"
            stroke="black"
          strokeWidth="3"
          
          />
         {has_side_one && 
          <>
            <text x="41" y="50" fontSize="15" transform="rotate(-35 30,30)">{units}</text>
            <text x="131" y="25" fontSize="15" transform="rotate(38 115,30)">{units}</text>
            <text x="47" y="90" fontSize="15" transform="rotate(35 10,90)">{units}</text>
            <text x="109" y="140" fontSize="15" transform="rotate(-35 90,80)">{units}</text>
            
          </>
         }

         {has_side_two &&
          <>
                <path d="M28,65 C28,65 40,75, 28,84"
              fill="none" stroke="black" strokeWidth="1"/>
              <text x="40" y="80" fontSize="15">{angles[0]}°</text>

              <path d="M160,65 C160,65 150,75, 160,84"
              fill="none" stroke="black" strokeWidth="1"/>
              <text x="115" y="80" fontSize="15">{angles[0]}°</text>

              {has_side_three && 
                <>
                  <path d="M25,67 C25,67 37,75, 25,83"
                  fill="none" stroke="black" strokeWidth="1"/>

                  <path d="M163,67 C163,67 153,75, 163,83"
                  fill="none" stroke="black" strokeWidth="1"/> 
                </>
              }
  
          </>
         
         }

         {has_side_three &&
          <>
              <path d="M80,25 C80,25 95,37, 110,25"
            fill="none" stroke="black" strokeWidth="1"/>
            <text x="80" y="50" fontSize="15">{angles[1]}°</text>

            <path d="M80,120 C80,120 95,108, 110,120"
            fill="none" stroke="black" strokeWidth="1"/>
            <text x="80" y="107" fontSize="15">{angles[1]}°</text>
          
          </>
         
         }
        </svg>
    </>
  )
}

function Trapezoid({sides, units, angles, letters}){

  let has_units = units!==""

  let x_vals = [0,55,55,120]

  if(!has_units){
    x_vals = [15,65,75,128]
  }

  let has_side_one = sides[0] !== ""
  let has_side_two = sides[1] !== ""
  let has_side_three = sides[2] !== ""
  let has_side_four = sides[3] !== ""
  let has_side_five = angles[0] !== ""
  let has_side_six = angles[1] !== ""
  let has_side_seven = angles[2] !== ""
  let has_side_eight = angles[3] !== ""

  let num_of_angles = has_side_five + has_side_six + has_side_seven + has_side_eight;

  return (
    <>
      <svg width="200" height="130">

        <text x="20" y="15" fontSize="15">{letters[0]}</text>
        <text x="124" y="15" fontSize="15">{letters[1]}</text>
        <text x="177" y="100" fontSize="15">{letters[2]}</text>
        <text x="0" y="100" fontSize="15">{letters[3]}</text>

      <text x={x_vals[0]} y="53" fontSize="15" transform="rotate(-75 18,50)">{sides[0]}</text>
      <text x={x_vals[1]} y="12" fontSize="15" >{sides[1]}</text>
      <text x={x_vals[2]} y="111" fontSize="15" >{sides[2]}</text>
      <text x={x_vals[3]} y="30" fontSize="15" transform="rotate(60 125,50)">{sides[3]}</text>
      
      {has_side_one &&
          <text x="20" y="53" fontSize="15" transform="rotate(-75 18,50)">{units}</text>
      }
      {has_side_two &&
        <text x="73" y="12" fontSize="15" >{units}</text>
      }
      {has_side_three &&
        <text x="73" y="111" fontSize="15" >{units}</text>
      }
      {has_side_four &&
        <text x="140" y="30" fontSize="15" transform="rotate(60 125,50)">{units}</text>
      }

      {has_side_five &&
        <>
          <path d="M17,84 C17,84 28,81, 25,95"
          fill="none" stroke="black" strokeWidth="1"/>
          <text x="28" y="85" fontSize="15">{angles[0]}°</text>
        </>
      }
      {has_side_six && 
        <>
          <path d="M30,30 C30,30 47,33, 45,17"
          fill="none" stroke="black" strokeWidth="1"/>
        <text x="40" y="46" fontSize="15">{angles[1]}°</text>

          {has_side_five && 
            <path d="M30,33 C30,33 50,35, 48,16"
            fill="none" stroke="black" strokeWidth="1"/>
          }
        </>
      }

      {has_side_seven &&
        <>
          <path d="M127,28 C127,28 110,35, 110,17"
          fill="none" stroke="black" strokeWidth="1"/>
        <text x="95" y="47" fontSize="15">{angles[2]}°</text>

        {has_side_five &&
          <path d="M127,31 C127,31 107,37, 107,17"
          fill="none" stroke="black" strokeWidth="1"/>
        }
        {has_side_six &&
          <path d="M127,25 C127,25 113,32, 113,17"
          fill="none" stroke="black" strokeWidth="1"/>
        }
        </>
      }

      {has_side_eight &&
        <>
          <path d="M150,95 C150,95 150,80, 162,83"
          fill="none" stroke="black" strokeWidth="1"/>
      <text x="120" y="85" font-size="15">{angles[3]}°</text>

          {num_of_angles > 1 &&
            <path d="M153,95 C153,95 153,80, 166,87"
            fill="none" stroke="black" strokeWidth="1"/>
          }
          {num_of_angles > 2 &&
            <path d="M147,95 C147,95 146,78, 162,80"
            fill="none" stroke="black" strokeWidth="1"/>
          }
          {num_of_angles > 3 &&
            <path d="M156,95 C156,95 156,85, 165,88"
            fill="none" stroke="black" strokeWidth="1"/>
          }


        </>
      }

      <polygon points="15,95 35,17 120,17 170,95"
            fill="none"
            stroke="black"
          strokeWidth="3"
          
          />

      </svg>
    </>
  )
}

function IsocelesTriangle({sides, units, angles, letters}){

  let pts = "80,20 35,120 130,120"

  let has_units = units!==""

  let x_vals = [25,85,60] 

  if(!has_units){
    x_vals = [25,110,70]
  }

  let has_side_one = sides[0] !== ""
  let has_side_two = sides[1] !== ""
  let has_angle_one = angles[0] !== ""
  let has_angle_two = angles[1] !== ""

  return(
    <>
    <svg width="220" height="140">

      <text x="19" y="125" fontSize="15">{letters[0]}</text>
      <text x="75" y="12" fontSize="15">{letters[1]}</text>
      <text x="135" y="125" fontSize="15">{letters[2]}</text>


    <text x={x_vals[0]} y="83" fontSize="15" transform="rotate(-64 30,60)">{sides[0]}</text>
    <text x={x_vals[1]} y="17" fontSize="15" transform="rotate(64 70,40)">{sides[0]}</text>
    <text x={x_vals[2]} y="135" fontSize="15">{sides[1]}</text>

    {has_side_one &&
      <>
        <text x="45" y="83" fontSize="15" transform="rotate(-64 30,60)">{units}</text>
        <text x="105" y="17" fontSize="15" transform="rotate(64 70,40)">{units}</text>
      </>
      
    }
    {has_side_two &&
      <text x="80" y="135" fontSize="15">{units}</text>

    }
    {has_angle_one &&
      <>
         <text x="54" y="110" fontSize="15">{angles[0]}°</text>
         <path d="M114,120 C114,120 112,107, 123,105"
            fill="none" stroke="black" strokeWidth="1"/>
          <path d="M50,120 C50,120 55,107, 42,105"
            fill="none" stroke="black" strokeWidth="1"/>

      </>
    }

    {has_angle_two &&
      <>
        <text x="70" y="63" fontSize="15">{angles[1]}°</text>
        <path d="M74,33 C74,33 80,45, 87,33"
            fill="none" stroke="black" strokeWidth="1"/>

        {has_angle_one && 
          <path d="M74,38 C74,38 80,45, 87,38"
          fill="none" stroke="black" strokeWidth="1"/>
        }
        
      </>
    }
    

    <polygon points={pts}
         fill="none"
         stroke="black"
          strokeWidth="3"
      ></polygon>

    </svg>
    </>
  )
}

function IsocelesTrapezoid({sides, units, angles, letters}){


  let has_side_one = sides[0] !== ""
  let has_side_two = sides[1] !== ""
  let has_side_three = sides[2] !== ""

  let has_angle_one = angles[0] !== ""
  let has_angle_two = angles[1] !== ""

  return (
    <>  
      <svg width="200" height="155">
        <text x="35" y="20" fontSize="15">{letters[0]}</text>
        <text x="155" y="20" fontSize="15">{letters[1]}</text>
        <text x="175" y="110" fontSize="15">{letters[2]}</text>
        <text x="15" y="110" fontSize="15">{letters[3]}</text>

        {has_side_one && <>
            <text x="20" y="80" fontSize="15" transform="rotate(-73 20,70)">{sides[0]} {units}</text>
          <text x="130" y="35" fontSize="15" transform="rotate(75 140,60)">{sides[0]} {units}</text>
          </>
        }
        {has_side_two &&
          <>
            <text x="80" y="15" fontSize="15">{sides[1]} {units}</text>
          </>
          
        }
        {has_side_three &&
          <text x="80" y="118" fontSize="15">{sides[2]} {units}</text>
        }

        {has_angle_one && 
          <>
            <text x="53" y="45" fontSize="15">{angles[0]}°</text>
            <text x="120" y="45" fontSize="15">{angles[0]}°</text>
            <path d="M47,30 C47,30 60,35, 60,20"
                fill="none" stroke="black" strokeWidth="1"/>
            <path d="M153,30 C153,30 140,35, 140,20"
                fill="none" stroke="black" strokeWidth="1"/>
          </>
        }

        {has_angle_two && 
          <>
            <text x="47" y="87" fontSize="15">{angles[1]}°</text>
            <text x="124" y="87" fontSize="15">{angles[1]}°</text>
            <path d="M35,85 C35,85 45,87, 45,100"
                    fill="none" stroke="black" strokeWidth="1"/>
            <path d="M153,100 C153,100 153,85, 165,85"
                    fill="none" stroke="black" strokeWidth="1"/>

              {has_angle_one &&
                <>
                  <path d="M35,80 C35,80 49,86, 49,100"
                    fill="none" stroke="black" strokeWidth="1"/>
                  <path d="M149,100 C149,100 150,83, 165,81"
                    fill="none" stroke="black" strokeWidth="1"/>
                
                </>
              }
          </>
        }

        <polygon points="30,100 50,20 150,20 170,100"
                fill="none"
                stroke="black"
              strokeWidth="3"
              
        />

      </svg>
    </>
  )
}


function Shape({type, sides, units, angles, letters}){
  
    if(type === 'triangle'){
      return (
        <>
        <div className="shape-holder">
          <Triangle sides={sides} units={units} angles={angles} letters={letters}/>
        </div>
        </>
      )
    }

    if(type === 'right-triangle'){
      return (
        <>
        <div className="shape-holder">
          <RightTriangle sides={sides} units={units} angles={angles} letters={letters}/>
        </div>
        </>
      )
    }

    if(type === 'isoceles-triangle'){
      return (
        <>
        <div className="shape-holder">
          <IsocelesTriangle sides={sides} units={units} angles={angles} letters={letters}/>
        </div>
        </>
      )
    }

    if(type === 'rectangle'){
      return (
        <>
        <div className="shape-holder">
        <Rectangle sides={sides} units={units} letters={letters}/>       
        </div>
        </>
      )
    }

    if(type === 'square'){
      return (
        <>
        <div className="shape-holder">
        <Square sides={sides} units={units} letters={letters}/>        
        </div>
        </>
      )
    }

    if(type === 'rhombus'){
      return (
        <>
        <div className="shape-holder">
        <Rhombus sides={sides} units={units} angles={angles} letters={letters}/>       
        </div>
        </>
      )
    }

    if(type === 'trapezoid'){
      return (
        <>
        <div className="shape-holder">
        <Trapezoid sides={sides} units={units} angles={angles} letters={letters}/>
        </div>
        </>
      )
    }

    if(type === 'isoceles-trapezoid'){
      return (
        <>
        <div className="shape-holder">
        <IsocelesTrapezoid sides={sides} units={units} angles={angles} letters={letters}/>
        </div>
        </>
      )
    }

  }

export default Shape