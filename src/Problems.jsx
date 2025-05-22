import { useState, useRef } from "react";

import ProblemDisplay from "./ProblemDisplay";
import ProblemForm from "./ProblemForm";
import DeleteButton from "./DeleteButton";

function Problems({ viewRef }) {
  const [problems, setProblems] = useState([
    {
      id: crypto.randomUUID(),
      question: "Question one",
      answers: [
        {
          id: crypto.randomUUID(),
          text: "answer one",
        },
        {
          id: crypto.randomUUID(),
          text: "answer two",
        },
      ],
      shapes: [
        {
          id: crypto.randomUUID(),
          type: "triangle",
          sides: [3, 4, 5],
          angles: [30, 30, 120],
          units: "cm",
          letters: ["A", "B", "C"],
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      question: "Question two",
      answers: [],
      shapes: [
        {
          id: crypto.randomUUID(),
          type: "rhombus",
          sides: [3],
          angles: [40, 140],
          units: "dm",
          letters: ["A", "B", "C", "D"],
        },
      ],
    },
  ]);

  function handleChangeQuestion(id, thing) {
    setProblems(
      problems.map((problem) => {
        if (problem.id === id) {
          return { ...problem, question: thing.target.value };
        } else {
          return problem;
        }
      })
    );
  }

  function handleChangeAnswer(idprob, idans, thing) {
    const nextProblems = problems.map((problem) => {
      if (problem.id === idprob) {
        return {
          ...problem,
          answers: [
            ...problem.answers.map((ans) => {
              if (ans.id === idans) {
                return { id: idans, text: thing.target.value };
              } else {
                return ans;
              }
            }),
          ],
        };
      } else {
        return problem;
      }
    });
    setProblems(nextProblems);
  }

  function handleRemoveAnswer(idprob, idans) {
    const nextProblems = problems.map((problem) => {
      if (problem.id === idprob) {
        return {
          ...problem,
          answers: [...problem.answers.filter((ans) => ans.id !== idans)],
        };
      } else {
        return problem;
      }
    });
    setProblems(nextProblems);
  }

  function handleAddAnswer(idprob) {
    const nextProblems = problems.map((problem) => {
      if (problem.id === idprob) {
        return {
          ...problem,
          answers: [...problem.answers, { id: crypto.randomUUID(), text: "" }],
        };
      } else {
        return problem;
      }
    });

    setProblems(nextProblems);
  }

  function handleAddProblem() {
    setProblems([
      ...problems,
      {
        id: crypto.randomUUID(),
        question: "",
        answers: [],
        shapes: [],
      },
    ]);
  }

  function handleRemoveProblem(idprob) {
    setProblems(problems.filter((p) => p.id !== idprob));
  }

  function handleAddShape(e, idprob) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const chosenShape = formData.get("select-shape");

    let newSides = [];
    let newAngles = [];
    let newLetters = [];

    if (chosenShape === "triangle") {
      newSides = ["", "", ""];
      newAngles = ["", "", ""];
      newLetters = ["", "", ""];
    } else if (chosenShape === "right-triangle") {
      newSides = ["", "", ""];
      newAngles = ["", ""];
      newLetters = ["", "", ""];
    } else if (chosenShape === "isosceles-triangle") {
      newSides = ["", ""];
      newAngles = ["", ""];
      newLetters = ["", "", ""];
    } else if (chosenShape === "rectangle") {
      newSides = ["", ""];
      newLetters = ["", "", "", ""];
    } else if (chosenShape === "square") {
      newSides = [""];
      newLetters = ["", "", "", ""];
    } else if (chosenShape === "rhombus") {
      newSides = [""];
      newAngles = ["", ""];
      newLetters = ["", "", "", ""];
    } else if (chosenShape === "trapezoid") {
      newSides = ["", "", "", ""];
      newAngles = ["", "", "", ""];
      newLetters = ["", "", "", ""];
    } else if (chosenShape === "isosceles-trapezoid") {
      newSides = ["", "", ""];
      newAngles = ["", ""];
      newLetters = ["", "", "", ""];
    }

    const nextProblems = problems.map((problem) => {
      if (problem.id === idprob) {
        return {
          ...problem,
          shapes: [
            ...problem.shapes,
            {
              id: crypto.randomUUID(),
              type: chosenShape,
              sides: newSides,
              angles: newAngles,
              letters: newLetters,
              units: "",
            },
          ],
        };
      } else {
        return problem;
      }
    });

    setProblems(nextProblems);
  }

  function handleDeleteShape(idprob, idshape, e) {
    e.preventDefault();
    const nextProblems = problems.map((problem) => {
      if (problem.id === idprob) {
        return {
          ...problem,
          shapes: [...problem.shapes.filter((sha) => sha.id !== idshape)],
        };
      } else {
        return problem;
      }
    });
    setProblems(nextProblems);
  }

  function handleSetSides(idprob, idshape, e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = [...formData.values()];

    const nextProblems = problems.map((problem) => {
      if (problem.id === idprob) {
        return {
          ...problem,
          shapes: [
            ...problem.shapes.map((sha) => {
              if (sha.id === idshape) {
                return { ...sha, sides: data };
              } else {
                return sha;
              }
            }),
          ],
        };
      } else {
        return problem;
      }
    });

    setProblems(nextProblems);
  }

  function handleSetUnits(idprob, idshape, e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = [...formData.values()];

    const nextProblems = problems.map((problem) => {
      if (problem.id === idprob) {
        return {
          ...problem,
          shapes: [
            ...problem.shapes.map((sha) => {
              if (sha.id === idshape) {
                return { ...sha, units: data[0] };
              } else {
                return sha;
              }
            }),
          ],
        };
      } else {
        return problem;
      }
    });

    setProblems(nextProblems);
  }

  function handleSetAngles(idprob, idshape, e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = [...formData.values()];

    const nextProblems = problems.map((problem) => {
      if (problem.id === idprob) {
        return {
          ...problem,
          shapes: [
            ...problem.shapes.map((sha) => {
              if (sha.id === idshape) {
                return { ...sha, angles: data };
              } else {
                return sha;
              }
            }),
          ],
        };
      } else {
        return problem;
      }
    });

    setProblems(nextProblems);
  }

  function handleSetLetters(idprob, idshape, e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = [...formData.values()];

    const nextProblems = problems.map((problem) => {
      if (problem.id === idprob) {
        return {
          ...problem,
          shapes: [
            ...problem.shapes.map((sha) => {
              if (sha.id === idshape) {
                return { ...sha, letters: data };
              } else {
                return sha;
              }
            }),
          ],
        };
      } else {
        return problem;
      }
    });

    setProblems(nextProblems);
  }

  const [title, setTitle] = useState("Test");
  const [name, setName] = useState("Name:");
  const [grade, setGrade] = useState("Grade:");
  const [subtitle, setSubtitle] = useState("Geometry");

  const [hasTitle, setHasTitle] = useState(true);
  const [hasName, setHasName] = useState(true);
  const [hasGrade, setHasGrade] = useState(true);
  const [hasSubtitle, setHasSubtitle] = useState(true);

  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col m-4 bg-neutral-600 p-2 shadow-md/40 rounded-xl">
          <div className=" mb-1 p-1 flex flex-col items-start">
            {hasTitle && (
              <label className=" p-1 m-1 flex flex-row items-center">
                {" "}
                <div className="font-bold text-white mr-2">Title:</div>
                <input
                  className="flex grow bg-neutral-200 p-1 rounded-lg hover:brightness-95"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <button
                  onClick={() => {
                    setHasTitle(false);
                  }}
                >
                  <DeleteButton />
                </button>
              </label>
            )}
            {!hasTitle && (
              <button
                className="bg-gray-100 p-1 pr-2 pl-2 m-1 rounded-full shadow-sm/40 cursor-pointer hover:scale-95"
                onClick={() => {
                  setHasTitle(true);
                }}
              >
                Add Title
              </button>
            )}
            {hasSubtitle && (
              <label className=" p-1 m-1 flex flex-row items-center">
                {" "}
                <div className="font-bold text-white mr-2">Subtitle:</div>
                <input
                  className="flex grow bg-neutral-200 rounded-lg hover:brightness-95 p-1"
                  type="text"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                />
                <button
                  onClick={() => {
                    setHasSubtitle(false);
                  }}
                >
                  <DeleteButton />
                </button>
              </label>
            )}
            {!hasSubtitle && (
              <button
                className="bg-gray-100 p-1 pr-2 pl-2 m-1 rounded-full shadow-sm/40 cursor-pointer hover:scale-95"
                onClick={() => {
                  setHasSubtitle(true);
                }}
              >
                Add Subtitle
              </button>
            )}
            {hasName && (
              <label className=" p-1 m-1 flex flex-row items-center">
                {" "}
                <div className="font-bold mr-2 text-white">Name:</div>
                <input
                  className="flex grow bg-neutral-200 rounded-lg hover:brightness-95 p-1"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button
                  onClick={() => {
                    setHasName(false);
                  }}
                >
                  <DeleteButton />
                </button>
              </label>
            )}
            {!hasName && (
              <button
                className="bg-gray-100 p-1 pr-2 pl-2 m-1 rounded-full shadow-sm/40 cursor-pointer hover:scale-95"
                onClick={() => {
                  setHasName(true);
                }}
              >
                Add Name
              </button>
            )}

            {hasGrade && (
              <label className=" p-1 m-1 flex flex-row items-center">
                {" "}
                <div className="font-bold mr-2 text-white">Grade:</div>
                <input
                  className="flex grow bg-neutral-200 rounded-lg hover:brightness-95 p-1"
                  type="text"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                />
                <button
                  onClick={() => {
                    setHasGrade(false);
                  }}
                >
                  <DeleteButton />
                </button>
              </label>
            )}
            {!hasGrade && (
              <button
                className="bg-gray-100 p-1 pr-2 pl-2 m-1 rounded-full shadow-sm/40 cursor-pointer hover:scale-95"
                onClick={() => {
                  setHasGrade(true);
                }}
              >
                Add Grade
              </button>
            )}
          </div>

          <div></div>

          {problems.map((problem) => (
            <ProblemForm
              key={problem.id}
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
          ))}

          <button
            className="bg-gray-100 p-1 pr-2 pl-2 m-1 rounded-full shadow-sm/40 cursor-pointer hover:scale-95"
            onClick={handleAddProblem}
          >
            Add Problem
          </button>
        </div>

        <div
          className="flex flex-col bg-white p-5 border-1 shadow-md/20 h-[1000px] w-[600px]"
          ref={viewRef}
        >
          {(hasTitle || hasSubtitle) && (
            <div className="flex flex-col items-center justify-center p-3 m-3">
              {hasTitle && <h1>{title}</h1>}
              {hasSubtitle && <h2>{subtitle}</h2>}
            </div>
          )}

          {(hasGrade || hasName) && (
            <div className="flex flex-row p-2 m-2">
              {hasName && (
                <div className="flex grow-7">
                  <div className="flex">{name}</div>
                  <div className="border-b flex grow-7 "></div>
                </div>
              )}
              {hasGrade && (
                <div className="flex grow-3">
                  <div className="flex">{grade}</div>
                  <div className="border-b flex grow-1"></div>
                </div>
              )}
            </div>
          )}

          {problems.map((problem) => (
            <ProblemDisplay
              key={problem.id}
              question={problem.question}
              answers={problem.answers}
              shapes={problem.shapes}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Problems;
