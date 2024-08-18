import {useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Problems from "./Problems";

//TODO
//regular triangle
//circles
// parallelogram, 
//3d shapes
//test grid
//lines, charts
//ANGLES

function App(){

  const viewRef = useRef(null)

  function handlePrint(){

    let page = viewRef.current

    let chi = page.children

    const pdf = new jsPDF(
      "p","px","a4"
    );

    let scale = 2;
    let print_scale = scale*1.5;
    let top_margin = 20;
    let left_margin = 40;
    let page_height = 1122;


    let arr = Array.from(chi)

    const tasks = arr.map(tab => html2canvas(tab,
      {scale: scale,
        
      }
    ))

    let coord = top_margin;

    Promise.all(tasks).then(canvases =>
    {
      for (const canvas of canvases)
      {   
        let imgData = canvas.toDataURL('image/png', 1.0);
        let height = canvas.height/print_scale;
        let width = canvas.width/print_scale;

        if(coord + height > 500){
          pdf.addPage()
          coord = 20;
        }
        pdf.addImage(imgData, 'PNG', left_margin, coord, width, height);
        coord += canvas.height/print_scale
        
        }

      pdf.output('dataurlnewwindow')
    })
  }

  return(
    <>
      <Problems viewRef={viewRef}/>
       <div className="print-button-container">
          <button onClick={handlePrint}>Print</button>
       </div>
      

    </>
  )
}

export default App