import { useState } from "react";
import DeleteButton from "./DeleteButton";

const shape_icons = {
  triangle: "Triangle",
  "right-triangle": "Right Triangle",
  "isosceles-triangle": "Isosceles Triangle",
  rectangle: "Rectangle",
  square: "Square",
  rhombus: "Rhombus",
  trapezoid: "Trapezoid",
  "isosceles-trapezoid": "Isosceles Trapezoid",
};

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
  handleSetLetters,
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [showButtonText, setShowButtonText] = useState("Hide");
  const [showAddShapeMenu, setShowAddShapeMenu] = useState(false);
  function handleShow() {
    if (!isVisible) {
      setShowButtonText("Hide");
    } else {
      setShowButtonText("Show");
    }
    setIsVisible(!isVisible);
  }

  return (
    <>
      <div
        key={problem.id}
        className="flex flex-col bg-neutral-200 shadow-md/40 rounded-2xl p-2 mb-1"
      >
        <label className="m-1 p-1 flex flex-row items-center">
          <p className="font-bold mr-1">Question:</p>
          <input
            className="bg-neutral-300 rounded-2xl m-1 p-2 hover:brightness-95 flex grow"
            key={problem.id}
            type="text"
            value={problem.question}
            onChange={(value) => {
              handleChangeQuestion(problem.id, value);
            }}
          />

          <button
            className="font-bold p-1 hover:scale-110 cursor-pointer text-neutral-800"
            onClick={handleShow}
          >
            {showButtonText}
          </button>
          <button
            className="font-bold p-1 hover:scale-110 cursor-pointer text-red-700"
            onClick={() => {
              handleRemoveProblem(problem.id);
            }}
          >
            Delete
          </button>
        </label>
        {isVisible && (
          <div key={problem.id}>
            {problem.answers.map((answer) => (
              <div className=" flex flex-row" key={answer.id}>
                <input
                  className="flex grow m-1 p-2 rounded-xl hover:brightness-95 bg-neutral-300"
                  key={answer.id}
                  type="text"
                  value={answer.text}
                  onChange={(value) => {
                    handleChangeAnswer(problem.id, answer.id, value);
                  }}
                ></input>
                <button
                  onClick={() => {
                    handleRemoveAnswer(problem.id, answer.id);
                  }}
                >
                  <DeleteButton />
                </button>
              </div>
            ))}

            {problem.shapes.map((shape) => (
              <div
                key={shape.id}
                className="border-1 rounded-xl shadow-md/30 p-2 m-2 flex flex-col items-center"
              >
                <div className="flex flex-row items-center">
                  <div className="font-bold">{shape_icons[shape.type]} </div>
                  <button
                    onClick={(e) => {
                      handleDeleteShape(problem.id, shape.id, e);
                    }}
                  >
                  <DeleteButton />
                  </button>
                </div>
                <form
                  onSubmit={(e) => {
                    handleSetSides(problem.id, shape.id, e);
                  }}
                  className=""
                >
                  <label className=" flex flex-row items-center">
                    <p className="p-1">Sides:</p>
                    {shape.sides.map((side) => (
                      <input
                        maxLength="3"
                        className="w-12 m-1 p-1 text-xl bg-neutral-100 rounded-2xl text-center"
                        type="text"
                        name="shape-side"
                      />
                    ))}
                    <button className="p-1 m-1 cursor-pointer" type="submit">
                      Set
                    </button>
                  </label>
                </form>

                {shape.type !== "rectangle" && shape.type !== "square" && (
                  <form
                    onSubmit={(e) => {
                      handleSetAngles(problem.id, shape.id, e);
                    }}
                    className="shape-sides-form"
                  >
                    <label className="flex flex-row items-center">
                      <p className="p-1">Angles:</p>
                      {shape.angles.map((side) => (
                        <input
                          maxLength="3"
                          className="w-12 m-1 p-1 text-xl bg-neutral-100 rounded-2xl text-center"
                          type="text"
                          name="shape-side"
                        />
                      ))}
                      <button type="submit">Set</button>
                    </label>
                  </form>
                )}

                <form
                  onSubmit={(e) => {
                    handleSetLetters(problem.id, shape.id, e);
                  }}
                  className="shape-sides-form"
                >
                  <label className="flex flex-row items-center">
                    <p className="p-1">Letters:</p>
                    {shape.letters.map((side) => (
                      <input
                        maxLength="1"
                        className="w-8 m-1 p-1 text-xl bg-neutral-100 rounded-2xl text-center"
                        type="text"
                        name="shape-side"
                      />
                    ))}
                    <button type="submit">Set</button>
                  </label>
                </form>

                <form
                  onSubmit={(e) => {
                    handleSetUnits(problem.id, shape.id, e);
                  }}
                  className="shape-units-form"
                >
                  <label className="flex flex-row items-center">
                    <div className="p-1">Units:</div>
                    <select
                      className="bg-neutral-100 p-1 m-1 rounded-md cursor-pointer shadow-md/20"
                      name="select-units"
                    >
                      <option value="cm">cm</option>
                      <option value="dm">dm</option>
                      <option value="mm">mm</option>
                      <option value="">none</option>
                    </select>
                    <button className="flex p-1 cursor-pointer" type="submit">
                      Set
                    </button>
                  </label>
                </form>
              </div>
            ))}

            <button
              className="bg-gray-100 p-1 pr-2 pl-2 m-1 rounded-full shadow-sm/40 cursor-pointer hover:scale-95"
              onClick={() => {
                handleAddAnswer(problem.id);
              }}
            >
              Add Answer
            </button>
            <button
              className="bg-gray-100 p-1 pr-2 pl-2 m-1 rounded-full shadow-sm/40 cursor-pointer hover:scale-95"
              onClick={() => {
                setShowAddShapeMenu(!showAddShapeMenu);
              }}
            >
              Add Shape
            </button>

            {/* Menu for creating new shape, visible after clicking button */}

            {showAddShapeMenu && (
              <div className="p-2 m-2 flex flex-row shadow-md/40 rounded-xl bg-lime-200 items-center justify-center">
                <form
                  onSubmit={(e) => {
                    handleAddShape(e, problem.id);
                  }}
                >
                  New Shape:
                  <select
                    className="font-bold cursor-pointer pl-3 p-2 m-1 bg-lime-400 rounded-2xl"
                    name="select-shape"
                  >
                    <option value="triangle">Triangle</option>
                    <option value="right-triangle">Right Triangle</option>
                    <option value="isosceles-triangle">Isosceles Triangle</option>
                    <option value="rectangle">Rectangle</option>
                    <option value="square">Square</option>
                    <option value="rhombus">Rhombus</option>
                    <option value="trapezoid">Trapezoid</option>
                    <option value="isosceles-trapezoid">
                      Isosceles Trapezoid
                    </option>
                  </select>
                  <button
                    className="cursor-pointer font-bold m-2 hover:scale-110 align-sub"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default ProblemForm;
