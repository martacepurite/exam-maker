export function IsoscelesTrapezoid({ sides, units, angles, letters }) {
  let has_side_one = sides[0] !== "";
  let has_side_two = sides[1] !== "";
  let has_side_three = sides[2] !== "";

  let has_angle_one = angles[0] !== "";
  let has_angle_two = angles[1] !== "";

  return (
    <>
      <svg width="200" height="155">
        <polygon
          points="30,100 50,20 150,20 170,100"
          fill="none"
          stroke="black"
          strokeWidth="3" />
        <text x="35" y="20" fontSize="15">
          {letters[0]}
        </text>
        <text x="155" y="20" fontSize="15">
          {letters[1]}
        </text>
        <text x="175" y="110" fontSize="15">
          {letters[2]}
        </text>
        <text x="15" y="110" fontSize="15">
          {letters[3]}
        </text>

        {has_side_one && (
          <>
            <text x="20" y="80" fontSize="15" transform="rotate(-73 20,70)">
              {sides[0]} {units}
            </text>
            <text x="130" y="35" fontSize="15" transform="rotate(75 140,60)">
              {sides[0]} {units}
            </text>
          </>
        )}
        {has_side_two && (
          <>
            <text x="80" y="15" fontSize="15">
              {sides[1]} {units}
            </text>
          </>
        )}
        {has_side_three && (
          <text x="80" y="118" fontSize="15">
            {sides[2]} {units}
          </text>
        )}

        {has_angle_one && (
          <>
            <text x="53" y="45" fontSize="15">
              {angles[0]}°
            </text>
            <text x="120" y="45" fontSize="15">
              {angles[0]}°
            </text>
            <path
              d="M47,30 C47,30 60,35, 60,20"
              fill="none"
              stroke="black"
              strokeWidth="1" />
            <path
              d="M153,30 C153,30 140,35, 140,20"
              fill="none"
              stroke="black"
              strokeWidth="1" />
          </>
        )}

        {has_angle_two && (
          <>
            <text x="47" y="87" fontSize="15">
              {angles[1]}°
            </text>
            <text x="124" y="87" fontSize="15">
              {angles[1]}°
            </text>
            <path
              d="M35,85 C35,85 45,87, 45,100"
              fill="none"
              stroke="black"
              strokeWidth="1" />
            <path
              d="M153,100 C153,100 153,85, 165,85"
              fill="none"
              stroke="black"
              strokeWidth="1" />

            {has_angle_one && (
              <>
                <path
                  d="M35,80 C35,80 49,86, 49,100"
                  fill="none"
                  stroke="black"
                  strokeWidth="1" />
                <path
                  d="M149,100 C149,100 150,83, 165,81"
                  fill="none"
                  stroke="black"
                  strokeWidth="1" />
              </>
            )}
          </>
        )}
      </svg>
    </>
  );
}
