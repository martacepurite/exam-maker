import Shape from "./Shape";

// displays created questions and answers in generated exam 
// dynamically spawns Shape components that appear in generated exam, passing shape type, side length and other params as props 

function ProblemDisplay({ question, answers, shapes }) {

  return (
    <>
      <div className="flex flex-col gap-2 p-2 pl-10">
        <h1>{question}</h1>
        <ul>
          {answers.map((answer) => (
            <li key={answer.id}>{answer.text}</li>
          ))}
        </ul>
        <div className="flex flex-row flex-wrap">
          {shapes.map((shape) => (
            <Shape
              key={shape.id}
              type={shape.type}
              sides={shape.sides}
              angles={shape.angles}
              units={shape.units}
              letters={shape.letters}
            ></Shape>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProblemDisplay;
