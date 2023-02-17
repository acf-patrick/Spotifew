import { StyledRangeButtons } from "../styles";

function TimeRangeButtons({
  activeRange,
  setActiveRange,
}: {
  activeRange: string;
  setActiveRange: Function;
}) {
  return (
    <StyledRangeButtons>
      <ul>
        {[
          ["short", "This Month"],
          ["medium", "Last 6 Months"],
          ["long", "All Time"],
        ].map((range, index) => (
          <li key={index}>
            <button
              className={activeRange === range[0] ? "active" : ""}
              onClick={() => setActiveRange(range[0])}
            >
              {range[1]}
            </button>
          </li>
        ))}
      </ul>
    </StyledRangeButtons>
  );
}

export default TimeRangeButtons;
