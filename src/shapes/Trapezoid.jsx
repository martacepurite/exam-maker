export function Trapezoid({ sides, units, angles, letters }) {
  let has_units = units !== "";

  let x_vals = [0, 55, 55, 120];

  if (!has_units) {
    x_vals = [15, 65, 75, 128];
  }

  let has_side_one = sides[0] !== "";
  let has_side_two = sides[1] !== "";
  let has_side_three = sides[2] !== "";
  let has_side_four = sides[3] !== "";
  let has_side_five = angles[0] !== "";
  let has_side_six = angles[1] !== "";
  let has_side_seven = angles[2] !== "";
  let has_side_eight = angles[3] !== "";

  let num_of_angles = has_side_five + has_side_six + has_side_seven + has_side_eight;

  return (
    <>
      <svg width="200" height="130">
        <polygon
          points="15,95 35,17 120,17 170,95"
          fill="none"
          stroke="black"
          strokeWidth="3" />

        <text x="20" y="15" fontSize="15">
          {letters[0]}
        </text>
        <text x="124" y="15" fontSize="15">
          {letters[1]}
        </text>
        <text x="177" y="100" fontSize="15">
          {letters[2]}
        </text>
        <text x="0" y="100" fontSize="15">
          {letters[3]}
        </text>

        <text x={x_vals[0]} y="53" fontSize="15" transform="rotate(-75 18,50)">
          {sides[0]}
        </text>
        <text x={x_vals[1]} y="12" fontSize="15">
          {sides[1]}
        </text>
        <text x={x_vals[2]} y="111" fontSize="15">
          {sides[2]}
        </text>
        <text x={x_vals[3]} y="30" fontSize="15" transform="rotate(60 125,50)">
          {sides[3]}
        </text>

        {has_side_one && (
          <text x="20" y="53" fontSize="15" transform="rotate(-75 18,50)">
            {units}
          </text>
        )}
        {has_side_two && (
          <text x="73" y="12" fontSize="15">
            {units}
          </text>
        )}
        {has_side_three && (
          <text x="73" y="111" fontSize="15">
            {units}
          </text>
        )}
        {has_side_four && (
          <text x="140" y="30" fontSize="15" transform="rotate(60 125,50)">
            {units}
          </text>
        )}

        {has_side_five && (
          <>
            <path
              d="M17,84 C17,84 28,81, 25,95"
              fill="none"
              stroke="black"
              strokeWidth="1" />
            <text x="28" y="85" fontSize="15">
              {angles[0]}°
            </text>
          </>
        )}
        {has_side_six && (
          <>
            <path
              d="M30,30 C30,30 47,33, 45,17"
              fill="none"
              stroke="black"
              strokeWidth="1" />
            <text x="40" y="46" fontSize="15">
              {angles[1]}°
            </text>

            {has_side_five && (
              <path
                d="M30,33 C30,33 50,35, 48,16"
                fill="none"
                stroke="black"
                strokeWidth="1" />
            )}
          </>
        )}

        {has_side_seven && (
          <>
            <path
              d="M127,28 C127,28 110,35, 110,17"
              fill="none"
              stroke="black"
              strokeWidth="1" />
            <text x="95" y="47" fontSize="15">
              {angles[2]}°
            </text>

            {has_side_five && (
              <path
                d="M127,31 C127,31 107,37, 107,17"
                fill="none"
                stroke="black"
                strokeWidth="1" />
            )}
            {has_side_six && (
              <path
                d="M127,25 C127,25 113,32, 113,17"
                fill="none"
                stroke="black"
                strokeWidth="1" />
            )}
          </>
        )}

        {has_side_eight && (
          <>
            <path
              d="M150,95 C150,95 150,80, 162,83"
              fill="none"
              stroke="black"
              strokeWidth="1" />
            <text x="120" y="85" font-size="15">
              {angles[3]}°
            </text>

            {num_of_angles > 1 && (
              <path
                d="M153,95 C153,95 153,80, 166,87"
                fill="none"
                stroke="black"
                strokeWidth="1" />
            )}
            {num_of_angles > 2 && (
              <path
                d="M147,95 C147,95 146,78, 162,80"
                fill="none"
                stroke="black"
                strokeWidth="1" />
            )}
            {num_of_angles > 3 && (
              <path
                d="M156,95 C156,95 156,85, 165,88"
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
