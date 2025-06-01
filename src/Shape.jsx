import { IsoscelesTrapezoid } from "./shapes/IsoscelesTrapezoid";
import { IsoscelesTriangle } from "./shapes/IsoscelesTriangle";
import { Rectangle } from "./shapes/Rectangle";
import { Rhombus } from "./shapes/Rhombus";
import { RightTriangle } from "./shapes/RightTriangle";
import { Square } from "./shapes/Square";
import { Trapezoid } from "./shapes/Trapezoid";
import { Triangle } from "./shapes/Triangle";

function Shape({ type, sides, units, angles, letters }) {
  if (type === "triangle") {
    return (
      <>
        <div className="p-2">
          <Triangle
            sides={sides}
            units={units}
            angles={angles}
            letters={letters}
          />
        </div>
      </>
    );
  }

  if (type === "right-triangle") {
    return (
      <>
        <div className="p-2">
          <RightTriangle
            sides={sides}
            units={units}
            angles={angles}
            letters={letters}
          />
        </div>
      </>
    );
  }

  if (type === "isosceles-triangle") {
    return (
      <>
        <div className="p-2">
          <IsoscelesTriangle
            sides={sides}
            units={units}
            angles={angles}
            letters={letters}
          />
        </div>
      </>
    );
  }

  if (type === "rectangle") {
    return (
      <>
        <div className="p-2">
          <Rectangle sides={sides} units={units} letters={letters} />
        </div>
      </>
    );
  }

  if (type === "square") {
    return (
        <div className="p-2">
          <Square sides={sides} units={units} letters={letters} />
        </div>
    );
  }

  if (type === "rhombus") {
    return (
        <div className="p-2">
          <Rhombus
            sides={sides}
            units={units}
            angles={angles}
            letters={letters}
            />
        </div>
    );
  }

  if (type === "trapezoid") {
    return (
        <div className="shape-holder">
          <Trapezoid
            sides={sides}
            units={units}
            angles={angles}
            letters={letters}
          />
        </div>
    );
  }

  if (type === "isosceles-trapezoid") {
    return (
        <div className="shape-holder">
          <IsoscelesTrapezoid
            sides={sides}
            units={units}
            angles={angles}
            letters={letters}
          />
        </div>
    );
  }
}

export default Shape;
