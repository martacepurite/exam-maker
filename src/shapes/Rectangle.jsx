export function Rectangle({ sides, units, letters }) {
  let has_units = units !== "";

  let x_vals = [25, 145, 75, 75];

  if (!has_units) {
    x_vals = [35, 155, 85, 85];
  }

  let has_side_one = sides[0] !== "";
  let has_side_two = sides[1] !== "";

  return (
    <>
      <svg width="200" height="160">
        <text x="5" y="31" fontSize="15">
          {letters[0]}
        </text>
        <text x="165" y="31" fontSize="15">
          {letters[1]}
        </text>
        <text x="165" y="131" fontSize="15">
          {letters[2]}
        </text>
        <text x="5" y="131" fontSize="15">
          {letters[3]}
        </text>

        <rect
          width="140"
          height="90"
          x="20"
          y="30"
          fill="none"
          stroke="black"
          strokeWidth="3" />
        <text x={x_vals[0]} y="70" fontSize="15" transform="rotate(-90 30,85)">
          {sides[0]}
        </text>
        <text x={x_vals[1]} y="70" fontSize="15" transform="rotate(90 160,75)">
          {sides[0]}
        </text>
        <text x={x_vals[2]} y="25" fontSize="15">
          {sides[1]}
        </text>
        <text x={x_vals[3]} y="137" fontSize="15">
          {sides[1]}
        </text>

        {has_side_one && (
          <>
            <text x="35" y="70" fontSize="15" transform="rotate(-90 30,85)">
              {units}
            </text>
            <text x="155" y="70" fontSize="15" transform="rotate(90 160,75)">
              {units}
            </text>
          </>
        )}
        {has_side_two && (
          <>
            <text x="85" y="25" fontSize="15">
              {units}
            </text>
            <text x="85" y="137" fontSize="15">
              {units}
            </text>
          </>
        )}
      </svg>
    </>
  );
}
