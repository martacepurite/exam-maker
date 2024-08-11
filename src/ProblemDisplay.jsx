import Shape from "./Shape";

function ProblemDisplay({question, answers, shapes}){

    return(
      <>
        <div className="display-container">
          
          <h1>{question}</h1>
          <ul>
          {answers.map(answer => (
            <li key={answer.id}>{answer.text}</li>
          ))}
          </ul>
          
            {shapes.map(shape =>(
              
                <Shape key={shape.id} type={shape.type} sides={shape.sides}
                  units={shape.units}
                ></Shape>
              
            ))}
          
        </div>
      </>
    )
    
  }

export default ProblemDisplay