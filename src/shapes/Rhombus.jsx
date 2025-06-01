export function Rhombus({ sides, units, angles, letters }) {
  let has_units = units !== "";

  let x_vals = [20, 110, 28, 90];

  if (!has_units) {
    x_vals = [35, 130, 47, 100];
  }

  let has_side_one = sides[0] !== "";
  let has_side_two = angles[0] !== "";
  let has_side_three = angles[1] !== "";

  return (
    <>
      <svg width="200" height="155">
        <polygon
          points="95,15 15,75 95,130 175,75"
          fill="none"
          stroke="black"
          strokeWidth="3" />

        <text x="0" y="80" fontSize="15">
          {letters[0]}
        </text>
        <text x="90" y="11" fontSize="15">
          {letters[1]}
        </text>
        <text x="180" y="80" fontSize="15">
          {letters[2]}
        </text>
        <text x="90" y="145" fontSize="15">
          {letters[3]}
        </text>

        <text x={x_vals[0]} y="50" fontSize="15" transform="rotate(-35 30,30)">
          {sides[0]}
        </text>
        <text x={x_vals[1]} y="25" fontSize="15" transform="rotate(38 115,30)">
          {sides[0]}
        </text>
        <text x={x_vals[2]} y="90" fontSize="15" transform="rotate(35 10,90)">
          {sides[0]}
        </text>
        <text x={x_vals[3]} y="140" fontSize="15" transform="rotate(-35 90,80)">
          {sides[0]}
        </text>

        {has_side_one && (
          <>
            <text x="41" y="50" fontSize="15" transform="rotate(-35 30,30)">
              {units}
            </text>
            <text x="131" y="25" fontSize="15" transform="rotate(38 115,30)">
              {units}
            </text>
            <text x="47" y="90" fontSize="15" transform="rotate(35 10,90)">
              {units}
            </text>
            <text x="109" y="140" fontSize="15" transform="rotate(-35 90,80)">
              {units}
            </text>
          </>
        )}

        {has_side_two && (
          <>
            <path
              d="M28,65 C28,65 40,75, 28,84"
              fill="none"
              stroke="black"
              strokeWidth="1" />
            <text x="40" y="80" fontSize="15">
              {angles[0]}°
            </text>

            <path
              d="M160,65 C160,65 150,75, 160,84"
              fill="none"
              stroke="black"
              strokeWidth="1" />
            <text x="115" y="80" fontSize="15">
              {angles[0]}°
            </text>

            {has_side_three && (
              <>
                <path
                  d="M25,67 C25,67 37,75, 25,83"
                  fill="none"
                  stroke="black"
                  strokeWidth="1" />

                <path
                  d="M163,67 C163,67 153,75, 163,83"
                  fill="none"
                  stroke="black"
                  strokeWidth="1" />
              </>
            )}
          </>
        )}

        {has_side_three && (
          <>
            <path
              d="M80,25 C80,25 95,37, 110,25"
              fill="none"
              stroke="black"
              strokeWidth="1" />
            <text x="80" y="50" fontSize="15">
              {angles[1]}°
            </text>

            <path
              d="M80,120 C80,120 95,108, 110,120"
              fill="none"
              stroke="black"
              strokeWidth="1" />
            <text x="80" y="107" fontSize="15">
              {angles[1]}°
            </text>
          </>
        )}
      </svg>
    </>
  );
}
