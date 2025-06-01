export function IsoscelesTriangle({ sides, units, angles, letters }) {
  let pts = "80,20 35,120 130,120";

  let has_units = units !== "";

  let x_vals = [25, 85, 60];

  if (!has_units) {
    x_vals = [25, 110, 70];
  }

  let has_side_one = sides[0] !== "";
  let has_side_two = sides[1] !== "";
  let has_angle_one = angles[0] !== "";
  let has_angle_two = angles[1] !== "";

  return (
    <>
      <svg width="220" height="140">
        <polygon
          points={pts}
          fill="none"
          stroke="black"
          strokeWidth="3"
        ></polygon>

        <text x="19" y="125" fontSize="15">
          {letters[0]}
        </text>
        <text x="75" y="12" fontSize="15">
          {letters[1]}
        </text>
        <text x="135" y="125" fontSize="15">
          {letters[2]}
        </text>

        <text x={x_vals[0]} y="83" fontSize="15" transform="rotate(-64 30,60)">
          {sides[0]}
        </text>
        <text x={x_vals[1]} y="17" fontSize="15" transform="rotate(64 70,40)">
          {sides[0]}
        </text>
        <text x={x_vals[2]} y="135" fontSize="15">
          {sides[1]}
        </text>

        {has_side_one && (
          <>
            <text x="45" y="83" fontSize="15" transform="rotate(-64 30,60)">
              {units}
            </text>
            <text x="105" y="17" fontSize="15" transform="rotate(64 70,40)">
              {units}
            </text>
          </>
        )}
        {has_side_two && (
          <text x="80" y="135" fontSize="15">
            {units}
          </text>
        )}
        {has_angle_one && (
          <>
            <text x="54" y="110" fontSize="15">
              {angles[0]}°
            </text>
            <path
              d="M114,120 C114,120 112,107, 123,105"
              fill="none"
              stroke="black"
              strokeWidth="1" />
            <path
              d="M50,120 C50,120 55,107, 42,105"
              fill="none"
              stroke="black"
              strokeWidth="1" />
          </>
        )}

        {has_angle_two && (
          <>
            <text x="70" y="63" fontSize="15">
              {angles[1]}°
            </text>
            <path
              d="M74,33 C74,33 80,45, 87,33"
              fill="none"
              stroke="black"
              strokeWidth="1" />

            {has_angle_one && (
              <path
                d="M74,38 C74,38 80,45, 87,38"
                fill="none"
                stroke="black"
                strokeWidth="1" />
            )}
          </>
        )}
      </svg>
    </>
  );
}
