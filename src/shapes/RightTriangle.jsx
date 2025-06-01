export function RightTriangle({ sides, units, angles, letters }) {
  let has_units = units !== "";

  let x_vals = [0, 65, 55];

  if (!has_units) {
    x_vals = [13, 85, 70];
  }

  let has_side_one = sides[0] !== "";
  let has_side_two = sides[1] !== "";
  let has_side_three = sides[2] !== "";
  let has_side_four = angles[0] !== "";
  let has_side_five = angles[1] !== "";

  return (
    <>
      <svg width="220" height="155">
        <polygon
          points="20,25 20,120 140,120"
          fill="none"
          stroke="black"
          strokeWidth="3"
        ></polygon>

        <polyline
          points="20,103 35,103 35,120"
          fill="none"
          stroke="black"
          strokeWidth="1" />

        <text x="5" y="20" fontSize="15">
          {letters[0]}
        </text>
        <text x="5" y="130" fontSize="15">
          {letters[1]}
        </text>
        <text x="148" y="130" fontSize="15">
          {letters[2]}
        </text>

        <text x={x_vals[0]} y="40" fontSize="15" transform="rotate(-90 33,59)">
          {sides[0]}
        </text>
        <text x={x_vals[1]} y="50" fontSize="15" transform="rotate(40, 70,29)">
          {sides[1]}
        </text>
        <text x={x_vals[2]} y="135" fontSize="15">
          {sides[2]}
        </text>

        {has_side_one && (
          <text x="19" y="40" fontSize="15" transform="rotate(-90 33,59)">
            {units}
          </text>
        )}
        {has_side_two && (
          <text x="83" y="50" fontSize="15" transform="rotate(40, 70,29)">
            {units}
          </text>
        )}
        {has_side_three && (
          <text x="74" y="135" fontSize="15">
            {units}
          </text>
        )}

        {has_side_four && (
          <>
            <text x="25" y="67" fontSize="15">
              {angles[0]}°
            </text>
            <path
              d="M20,45 C20,45 33,50, 33,35"
              fill="none"
              stroke="black"
              strokeWidth="1" />
          </>
        )}
        {has_side_five && (
          <>
            <text x="80" y="113" fontSize="15">
              {angles[1]}°
            </text>
            <path
              d="M113,120 C113,120 110,107, 118,105"
              fill="none"
              stroke="black"
              strokeWidth="1" />
            {has_side_four && (
              <path
                d="M116,120 C116,120 112,107, 123,105"
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
