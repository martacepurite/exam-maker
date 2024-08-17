import { useState } from "react"

const shape_icons = {
  'triangle': "Triangle",
  'right-triangle': "Right Triangle",
  'isoceles-triangle': "Isoceles Triangle",
  'rectangle': "Rectangle",
  'square': "Square",
  'rhombus': "Rhombus",
  'trapezoid': "Trapezoid",

}

function ProblemForm({
    problem,
    handleChangeQuestion,
    handleChangeAnswer,
    handleAddAnswer,
    handleRemoveAnswer,
    handleRemoveProblem,
    handleAddShape,
    handleDeleteShape,
    handleSetSides,
    handleSetUnits,
    handleSetAngles,
    handleSetLetters
  }){
  
      const [isVisible, setIsVisible] = useState(true)
      const [showButtonText, setShowButtonText] = useState('Hide')

      const [showAddShapeMenu, setShowAddShapeMenu] = useState(false)
  
      function handleShow(){
        if(!isVisible){
          setShowButtonText('Hide')
        }else{
          setShowButtonText('Show')
        }
        setIsVisible(!isVisible)
      }

    return (
      <>
          <div key={problem.id} className="problem-box">
  
            <label className="question-label"> Question:
            <input key={problem.id} type="text" value={problem.question}
             onChange={(value) => {handleChangeQuestion(problem.id, value)}}/>
            </label>
  
            <button onClick={handleShow}>{showButtonText}</button>
            <button onClick={() => {handleRemoveProblem(problem.id)}}>Delete</button>
  
            {isVisible && <div key={problem.id}>
  
                {problem.answers.map(answer => (
                  <div key={answer.id}>
                    <input key={answer.id} type="text" value={answer.text}                
                      onChange={(value) => {handleChangeAnswer(problem.id, answer.id, value)}}
                    >
                    </input>
                    <button onClick={() => {handleRemoveAnswer(problem.id, answer.id)}}>X</button>
                  </div>
      
                ))}
  
                {problem.shapes.map(shape => (
                  <div key={shape.id} className="shape-settings-container">
                    <label>{shape_icons[shape.type]}
                    <form onSubmit={(e)=>{handleSetSides(problem.id, shape.id, e)}} className="shape-sides-form"> 
                    <label> Sides:
                      {shape.sides.map(side => (
                        <input type="text" name="shape-side"/>
                      ))}
                    </label>
                        <button type="submit">Set</button>
                       <button onClick={(e) => {handleDeleteShape(problem.id,shape.id,e)}}>X</button>
                    
                    </form>
                  
                  {(shape.type !== 'rectangle' && shape.type !== 'square') &&
                    <form onSubmit={(e)=>{handleSetAngles(problem.id, shape.id, e)}}className="shape-sides-form">
                    <label> Angles:
                    {shape.angles.map(side => (
                        <input type="text" name="shape-side"/>
                      ))}
                      </label>
                      <button type="submit">Set</button>
                    </form>

                  }

                  <form onSubmit={(e)=>{handleSetLetters(problem.id, shape.id, e)}}className="shape-sides-form">
                  <label> Letters:
                    {shape.letters.map(side => (
                        <input type="text" name="shape-side"/>
                      ))}
                      </label>
                      <button type="submit">Set</button>

                  </form>
                    
                    
                    <form onSubmit={(e)=>{handleSetUnits(problem.id, shape.id, e)}} className="shape-units-form">
                        <label>Units:
                          <select name="select-units">
                            <option value="cm">cm</option>
                            <option value="dm">dm</option>
                            <option value="mm">mm</option>
                            <option value="">none</option>
                          </select>

                        </label>
                        <button type="submit">Set</button>
                    </form>
                    </label>
                    
                    </div>
                ))}
  
              <button onClick={() => {handleAddAnswer(problem.id)}}>Add Answer</button>
              <button onClick={() => {setShowAddShapeMenu(!showAddShapeMenu)}}>Add Shape</button>

              {showAddShapeMenu && <div className="add-shape-menu">
                <form onSubmit={(e) => {handleAddShape(e,problem.id)}}>
                    <select name="select-shape">
                        <option value="triangle">Triangle</option>
                        <option value="right-triangle">Right Triangle</option>
                        <option value="isoceles-triangle">Isoceles Triangle</option>
                        <option value="rectangle">Rectangle</option>
                        <option value="square">Square</option>
                        <option value="rhombus">Rhombus</option>
                        <option value="trapezoid">Trapezoid</option>
                        
                    </select>
                        <button type="submit">Create</button>
                </form>
                
                </div>
                } 
                
            </div>}
  
          </div>
      
      </>
    )
  }

export default ProblemForm