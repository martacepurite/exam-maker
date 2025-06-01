export function Triangle({ sides, units, angles, letters }) {
  let pts = "50,20 15,90 150,90";

  let has_units = units !== "";

  let x_vals = [0, 75, 50];

  if (!has_units) {
    x_vals = [15, 85, 60];
  }

  let has_side_one = sides[0] !== "";
  let has_side_two = sides[1] !== "";
  let has_side_three = sides[2] !== "";
  let has_side_four = angles[0] !== "";
  let has_side_five = angles[1] !== "";
  let has_side_six = angles[2] !== "";

  let num_of_angles = has_side_four + has_side_five + has_side_six;

  return (
    <>
      <svg width="220" height="140">
        <polygon
          points={pts}
          fill="none"
          stroke="black"
          strokeWidth="3"
        ></polygon>

        <text x="45" y="15" fontSize="15">
          {letters[0]}
        </text>
        <text x="0" y="95" fontSize="15">
          {letters[1]}
        </text>
        <text x="158" y="95" fontSize="15">
          {letters[2]}
        </text>

        <text x={x_vals[0]} y="46" fontSize="15" transform="rotate(-62 30,45)">
          {sides[0]}
        </text>
        <text x={x_vals[1]} y="29" fontSize="15" transform="rotate(37, 75,25)">
          {sides[1]}
        </text>
        <text x={x_vals[2]} y="107" fontSize="15">
          {sides[2]}
        </text>

        {has_side_one && (
          <text x="19" y="46" fontSize="15" transform="rotate(-62 30,45)">
            {units}
          </text>
        )}
        {has_side_two && (
          <text x="95" y="29" fontSize="15" transform="rotate(37, 75,25)">
            {units}
          </text>
        )}
        {has_side_three && (
          <text x="70" y="107" fontSize="15">
            {units}
          </text>
        )}

        {has_side_four && (
          <>
            <text x="33" y="77" fontSize="15">
              {angles[0]}°
            </text>
            <path
              d="M20,78 C20,78 33,76, 30,90"
              fill="none"
              stroke="black"
              strokeWidth="1" />
            {has_side_six && (
              <path
                d="M20,81 C20,81 29,77, 28,90"
                fill="none"
                stroke="black"
                strokeWidth="1" />
            )}
          </>
        )}

        {has_side_five && (
          <>
            <text x="44" y="53" fontSize="15">
              {angles[1]}°
            </text>
            <path
              d="M45,29 C45,29 55,35, 58,27"
              fill="none"
              stroke="black"
              strokeWidth="1" />

            {num_of_angles > 1 && (
              <>
                <path
                  d="M45,32 C45,32 55,37, 60,29"
                  fill="none"
                  stroke="black"
                  strokeWidth="1" />

                {num_of_angles > 2 && (
                  <path
                    d="M43,33 C43,33 55,42, 63,29"
                    fill="none"
                    stroke="black"
                    strokeWidth="1" />
                )}
              </>
            )}
          </>
        )}

        {has_side_six && (
          <>
            <text x="93" y="84" fontSize="15">
              {angles[2]}°
            </text>
            <path
              d="M125,90 C125,90 120,80, 130,75"
              fill="none"
              stroke="black"
              strokeWidth="1" />
          </>
        )}
      </svg>
    </>
  );
}
