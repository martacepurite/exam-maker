import { useState } from "react"

const shape_icons = {
  'triangle': "Triangle",
  'right-triangle': "Right Triangle",
  'isoceles-triangle': "Isoceles Triangle",
  'rectangle': "Rectangle",
  'square': "Square",
  'rhombus': "Rhombus",
  'trapezoid': "Trapezoid",
  'isoceles-trapezoid': "Isoceles Trapezoid"

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
}) {

  const [isVisible, setIsVisible] = useState(true)
  const [showButtonText, setShowButtonText] = useState('Hide')

  const [showAddShapeMenu, setShowAddShapeMenu] = useState(false)

  function handleShow() {
    if (!isVisible) {
      setShowButtonText('Hide')
    } else {
      setShowButtonText('Show')
    }
    setIsVisible(!isVisible)
  }

  return (
    <>
      <div key={problem.id} className="flex flex-col bg-sky-300 p-1">

        <label className=" m-1 p-1 flex flex-row items-center">
          <p className="font-bold">Question:</p>
          <input className="bg-sky-200 rounded-md m-2 p-1 flex grow" key={problem.id} type="text" value={problem.question}
            onChange={(value) => { handleChangeQuestion(problem.id, value) }} />

          <button className="font-bold p-1 hover:scale-110 cursor-pointer text-sky-900" onClick={handleShow}>{showButtonText}</button>
          <button className="font-bold p-1 hover:scale-110 cursor-pointer text-red-700" onClick={() => { handleRemoveProblem(problem.id) }}>Delete</button>

        </label>
        {isVisible && <div key={problem.id}>

          {problem.answers.map(answer => (
            <div className=" flex flex-row " key={answer.id}>
              <input className="flex grow m-1 p-1 rounded-md bg-sky-200" key={answer.id} type="text" value={answer.text}
                onChange={(value) => { handleChangeAnswer(problem.id, answer.id, value) }}
              >
              </input>
              <button className="pr-2 pl-1 text-red-800 font-bold text-2xl hover:scale-110 cursor-pointer " onClick={() => { handleRemoveAnswer(problem.id, answer.id) }}>x</button>
            </div>

          ))}

          {problem.shapes.map(shape => (
            <div key={shape.id} className="bg-amber-500 p-2 m-2 flex flex-col">
              <div className="font-bold">{shape_icons[shape.type]} </div>
              <form onSubmit={(e) => { handleSetSides(problem.id, shape.id, e) }} className="">
                <label className=" flex flex-row items-center">
                  <p className="p-1">Sides:</p>
                  {shape.sides.map(side => (
                    <input className="w-8 m-1 p-1 text-xl bg-sky-200 rounded-sm" type="text" name="shape-side" />
                  ))}
                  <button type="submit">Set</button>
                  <button onClick={(e) => { handleDeleteShape(problem.id, shape.id, e) }}>X</button>
                </label>

              </form>

              {(shape.type !== 'rectangle' && shape.type !== 'square') &&
                <form onSubmit={(e) => { handleSetAngles(problem.id, shape.id, e) }} className="shape-sides-form">
                  <label className="flex flex-row items-center">
                    <p className="p-1">Angles:</p>
                    {shape.angles.map(side => (
                      <input className="w-8 m-1 p-1 text-xl bg-sky-200 rounded-sm" type="text" name="shape-side" />
                    ))}
                    <button type="submit">Set</button>
                  </label>
                </form>

              }

              <form onSubmit={(e) => { handleSetLetters(problem.id, shape.id, e) }} className="shape-sides-form">
                <label className="flex flex-row items-center">
                  <p className="p-1">Letters:</p>
                  {shape.letters.map(side => (
                    <input className="w-8 m-1 p-1 text-xl bg-sky-200 rounded-sm" type="text" name="shape-side" />
                  ))}
                  <button type="submit">Set</button>
                </label>

              </form>


              <form onSubmit={(e) => { handleSetUnits(problem.id, shape.id, e) }} className="shape-units-form">
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


            </div>
          ))}

          <button onClick={() => { handleAddAnswer(problem.id) }}>Add Answer</button>
          <button onClick={() => { setShowAddShapeMenu(!showAddShapeMenu) }}>Add Shape</button>

          {showAddShapeMenu && <div className="add-shape-menu">
            <form onSubmit={(e) => { handleAddShape(e, problem.id) }}>
              <select name="select-shape">
                <option value="triangle">Triangle</option>
                <option value="right-triangle">Right Triangle</option>
                <option value="isoceles-triangle">Isoceles Triangle</option>
                <option value="rectangle">Rectangle</option>
                <option value="square">Square</option>
                <option value="rhombus">Rhombus</option>
                <option value="trapezoid">Trapezoid</option>
                <option value="isoceles-trapezoid">Isoceles Trapezoid</option>

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