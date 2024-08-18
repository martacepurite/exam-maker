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
            units: 'cm',
            letters: ["A","B","C"]
            
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
            units: 'dm',
            letters: ["A","B","C","D"]
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
      let newLetters = []
  
      if(chosenShape === 'triangle') {
        newSides = ["","",""]
        newAngles = ["", "", ""]
        newLetters = ["", "", ""]
      }else if(chosenShape === 'right-triangle'){
        newSides = ["","",""]
        newAngles = ["", ""]
        newLetters = ["", "", ""]
      }
      else if(chosenShape === 'isoceles-triangle'){
        newSides = ["",""]
        newAngles = ["", ""]
        newLetters = ["", "", ""]
      }
      else if(chosenShape === 'rectangle'){
        newSides = ["",""]
        newLetters = ["", "", "", ""]
      }else if(chosenShape === 'square'){
        newSides = [""]
        newLetters = ["", "", "", ""]
      }else if(chosenShape === 'rhombus'){
        newSides = [""]
        newAngles = ["", ""]
        newLetters = ["", "", "", ""]
      }else if(chosenShape === 'trapezoid'){
        newSides = ["","","", ""]
        newAngles = ["", "", "", ""]
        newLetters = ["", "", "", ""]
      }else if(chosenShape === 'isoceles-trapezoid'){
        newSides = ["","",""]
        newAngles = ["", ""]
        newLetters = ["", "", "", ""]
      }
  
      const nextProblems = (problems.map(problem => {
        if(problem.id === idprob){
  
          return {...problem,
            shapes:[
              ...problem.shapes,
               {id:crypto.randomUUID(),
                 type:chosenShape,
                  sides:newSides,
                  angles:newAngles,
                  letters:newLetters,
                  units:""
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
                  return {...sha, sides:data}
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
                  return {...sha, units:data[0]}
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
                  return {...sha, angles:data}
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

    function handleSetLetters(idprob, idshape,e){
      e.preventDefault()
      const formData = new FormData(e.target)
      const data = [...formData.values()]
  
      const nextProblems = (problems.map(problem => {
        if(problem.id === idprob){
  
          return {...problem,
            shapes:[
              ...problem.shapes.map(sha => {
                
                if(sha.id === idshape){
                  return {...sha, letters:data}
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
    const [grade, setGrade] = useState('Grade:')
    const [subtitle, setSubtitle] = useState('Geometry')

    const [hasTitle, setHasTitle] = useState(true)
    const [hasName, setHasName] = useState(true)
    const [hasGrade, setHasGrade] = useState(true)
    const [hasSubtitle, setHasSubtitle] = useState(true)
  
    return (
      <>
        <div >
          
          <div className="problem-div" ref={viewRef}>

            {(hasTitle || hasSubtitle) &&
                <div className="title-container">
                    {hasTitle &&
                        <h1>{title}</h1>
                    } 
                    {hasSubtitle &&
                        <h2>{subtitle}</h2>
                    }
                </div>
            }
            
            {(hasGrade || hasName) &&
                <div className="title-name-container">
                    {hasName &&
                        <h2>{name} ____________________________  </h2>
                    }
                    {hasGrade && 
                        <h2>{grade}_________ </h2>
                    }
    
                </div>
            }
            
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
              {hasTitle && 
                <label> Title: 
                  <input type="text" value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                    <button onClick={() => {setHasTitle(false)}}>X</button>
                </label>
              }
              {!hasTitle &&
                <button onClick={() => {setHasTitle(true)}}>Add Title</button>
              }
              {hasSubtitle && 
                <label> Subtitle: 
                  <input type="text" value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}/>
                    <button onClick={() => {setHasSubtitle(false)}}>X</button>
                </label>
              }
              {!hasSubtitle &&
                <button onClick={() => {setHasSubtitle(true)}}>Add Subtitle</button>
              }
              {hasName && 
                <label> Name: 
                  <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)}/>
                  <button onClick={() => {setHasName(false)}}>X</button>
                </label>
              }
              {!hasName && 
                <button onClick={() => {setHasName(true)}}>Add Name</button>
              }

              {hasGrade && 
                <label> Grade: 
                  <input type="text" value={grade}
                    onChange={(e) => setGrade(e.target.value)}/>
                  <button onClick={() => {setHasGrade(false)}}>X</button>
                </label>
              }
              {!hasGrade && 
                <button onClick={() => {setHasGrade(true)}}>Add Grade</button>
              }

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
                 handleSetLetters={handleSetLetters}
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
