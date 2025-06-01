export function Square({ sides, units, letters }) {
  let has_units = units !== "";

  let x_vals = [10, 80, 50, 50];

  if (!has_units) {
    x_vals = [20, 95, 65, 65];
  }

  let has_side = sides[0] !== "";

  return (
    <>
      <svg width="200" height="150">
        <text x="7" y="27" fontSize="15">
          {letters[0]}
        </text>
        <text x="123" y="27" fontSize="15">
          {letters[1]}
        </text>
        <text x="125" y="140" fontSize="15">
          {letters[2]}
        </text>
        <text x="5" y="141" fontSize="15">
          {letters[3]}
        </text>

        <text x={x_vals[0]} y="100" fontSize="15" transform="rotate(-90 10,95)">
          {sides[0]}
        </text>
        <text x={x_vals[1]} y="55" fontSize="15" transform="rotate(90 100,80)">
          {sides[0]}
        </text>
        <text x={x_vals[2]} y="25" fontSize="15">
          {sides[0]}
        </text>
        <text x={x_vals[3]} y="147" fontSize="15">
          {sides[0]}
        </text>

        {has_side && (
          <>
            <text x="20" y="100" fontSize="15" transform="rotate(-90 10,95)">
              {units}
            </text>
            <text x="90" y="55" fontSize="15" transform="rotate(90 100,80)">
              {units}
            </text>
            <text x="60" y="25" fontSize="15">
              {units}
            </text>
            <text x="60" y="147" fontSize="15">
              {units}
            </text>
          </>
        )}

        <rect
          width="100"
          height="100"
          x="20"
          y="30"
          fill="none"
          stroke="black"
          strokeWidth="3"
        />
      </svg>
    </>
  );
}
