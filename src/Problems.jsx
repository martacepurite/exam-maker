import { useState, useRef } from "react";

import ProblemDisplay from "./ProblemDisplay";
import ProblemForm from "./ProblemForm";

function Problems({viewRef}){

    const [problems, setProblems] = useState([
      {
        id: crypto.randomUUID(),
        question: 'Question one',
        answers: [
          {
            id: crypto.randomUUID(),
            text: 'answer one'
          },
          {
            id: crypto.randomUUID(),
            text: 'answer two'
          }
        ],
        shapes: [
          {
            id: crypto.randomUUID(),
            type: 'triangle',
            sides: [3, 4, 5],
            angles: [30, 30, 120],
            units: 'cm'
            
          }
        ]
      },
      {
        id: crypto.randomUUID(),
        question: 'Question two',
        answers: [
          
        ],
        shapes: [
          {
            id: crypto.randomUUID(),
            type: 'rhombus',
            sides: [3],
            angles: [40, 140],
            units: 'dm'
          }
        ]
      },
      
    ])
  
    function handleChangeQuestion(id, thing){
  
      setProblems(problems.map(problem => {
        if(problem.id === id){
          return {...problem, question:thing.target.value};
        }else {
          return problem;
        }
  
      }))
    }
  
    function handleChangeAnswer(idprob, idans, thing){
  
      const nextProblems = (problems.map(problem => {
        if(problem.id === idprob){
  
          return {...problem,
            answers:[
              ...problem.answers.map(ans => {
                
                if(ans.id === idans){
                  return {id:idans, text:thing.target.value}
                }else{
                  return ans;
                }
                
              })]
  
          };
        }else{
          return problem;
        }
        
      }))
  
      setProblems(nextProblems)   
    }
  
    function handleRemoveAnswer(idprob, idans){
  
      const nextProblems = (problems.map(problem => {
        if(problem.id === idprob){
          return {...problem,
            answers:[
              ...problem.answers.filter(ans => ans.id !== idans)]
          };
        }else{
          return problem;
        }     
      }))
      setProblems(nextProblems)   
    }
  
    function handleAddAnswer(idprob){
  
      const nextProblems = (problems.map(problem => {
        if(problem.id === idprob){
  
          return {...problem,
            answers:[
              ...problem.answers, {id:crypto.randomUUID(), text:''}]
  
          };
        }else{
          return problem;
        }
        
      }))
  
      setProblems(nextProblems)   
  
    }
  
    function handleAddProblem(){
      setProblems(
        [...problems,
          {id: crypto.randomUUID(), 
            question:'',
            answers:[],
            shapes:[]
          }
        ]
      )
    }
  
    function handleRemoveProblem(idprob){
      setProblems(
        problems.filter(p =>
          p.id !== idprob
        )
      )
  
    }
  
    function handleAddShape(e, idprob){
      e.preventDefault()
      const formData = new FormData(e.target)
      const chosenShape = formData.get("select-shape")
  
      let newSides = []
      let newAngles = []
  
      if(chosenShape === 'triangle') {
        newSides = ["","",""]
        newAngles = ["", "", ""]
      }else if(chosenShape === 'right-triangle'){
        newSides = ["","",""]
        newAngles = ["", ""]
      }
      else if(chosenShape === 'rectangle'){
        newSides = ["",""]
      }else if(chosenShape === 'square'){
        newSides = [""]
      }else if(chosenShape === 'rhombus'){
        newSides = [""]
        newAngles = ["", ""]
      }else if(chosenShape === 'trapezoid'){
        newSides = ["","","", ""]
        newAngles = ["", "", "", ""]
      }
  
      const nextProblems = (problems.map(problem => {
        if(problem.id === idprob){
  
          return {...problem,
            shapes:[
              ...problem.shapes,
               {id:crypto.randomUUID(),
                 type:chosenShape,
                  sides:newSides,
                  angles:newAngles
                }]
  
          };
        }else{
          return problem;
        }
        
      }))
  
      setProblems(nextProblems)
    }
  
    function handleDeleteShape(idprob, idshape, e){
      e.preventDefault()
      const nextProblems = (problems.map(problem => {
        if(problem.id === idprob){
          return {...problem,
            shapes:[
              ...problem.shapes.filter(sha => sha.id !== idshape)]
          };
        }else{
          return problem;
        }     
      }))
      setProblems(nextProblems) 
    }
  
    function handleSetSides(idprob, idshape,e){
      e.preventDefault()
      const formData = new FormData(e.target)
      const data = [...formData.values()]
  
      const nextProblems = (problems.map(problem => {
        if(problem.id === idprob){
  
          return {...problem,
            shapes:[
              ...problem.shapes.map(sha => {
                
                if(sha.id === idshape){
                  return {id:idshape, type:sha.type, sides:data, angles:sha.angles, units:sha.units}
                }else{
                  return sha;
                }
                
              })]
  
          };
        }else{
          return problem;
        }
        
      }))
  
      setProblems(nextProblems)   
    }

    function handleSetUnits(idprob, idshape, e){
      e.preventDefault()
      const formData = new FormData(e.target)
      const data = [...formData.values()]
  
      const nextProblems = (problems.map(problem => {
        if(problem.id === idprob){
  
          return {...problem,
            shapes:[
              ...problem.shapes.map(sha => {
                
                if(sha.id === idshape){
                  return {id:idshape, type:sha.type, sides:sha.sides,angles:sha.angles, units:data[0]}
                }else{
                  return sha;
                }
                
              })]
  
          };
        }else{
          return problem;
        }
        
      }))
  
      setProblems(nextProblems) 
    }

    function handleSetAngles(idprob, idshape,e){
      e.preventDefault()
      const formData = new FormData(e.target)
      const data = [...formData.values()]
  
      const nextProblems = (problems.map(problem => {
        if(problem.id === idprob){
  
          return {...problem,
            shapes:[
              ...problem.shapes.map(sha => {
                
                if(sha.id === idshape){
                  return {id:idshape, type:sha.type, sides:sha.sides,angles:data, units:sha.units}
                }else{
                  return sha;
                }
                
              })]
  
          };
        }else{
          return problem;
        }
        
      }))
  
      setProblems(nextProblems) 
    }
    
    const [title, setTitle] = useState('Test')
    const [name, setName] = useState('Name:')
    const [variant, setVariant] = useState('Geometry')
  
    return (
      <>
        <div >
          
          <div className="problem-div" ref={viewRef}>
          <div className="title-container">
            <h1>{title}</h1>
            <h2>{variant}</h2>
            
          </div>

          <div className="title-name-container">
            <h2>{name} _________ </h2>
          </div>
          {problems.map(problem =>
            (        
                <ProblemDisplay 
                key={problem.id} 
                question={problem.question}
                answers={problem.answers}
                shapes={problem.shapes}
                />
            )
          )}
        </div>
  
        <div className="problems-container">
          <div className="title-form-container">
            <form>
              <label> Title: 
                  <input type="text" value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                </label>

                <label> Subtitle: 
                  <input type="text" value={variant}
                    onChange={(e) => setVariant(e.target.value)}/>
              </label>
                <label> Name: 
                  <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </label>

            </form>

          </div>

          <div>
            
          </div>

          {problems.map(problem =>
            (        
                <ProblemForm key={problem.id}
                 problem={problem}
                 handleChangeQuestion={handleChangeQuestion}
                 handleChangeAnswer={handleChangeAnswer}
                 handleRemoveAnswer={handleRemoveAnswer}
                 handleAddAnswer={handleAddAnswer}
                 handleRemoveProblem={handleRemoveProblem}
                 handleAddShape={handleAddShape}
                 handleDeleteShape={handleDeleteShape}
                 handleSetSides={handleSetSides}
                 handleSetUnits={handleSetUnits}
                 handleSetAngles={handleSetAngles}
                 ></ProblemForm>
            )
          )}
  
          <button onClick={handleAddProblem}>Add Problem</button>
        </div>
        </div>
      </>
    )
  }

export default Problems
