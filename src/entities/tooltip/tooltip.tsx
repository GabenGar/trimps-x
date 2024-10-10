export function Tooltip() {
  return (
    <div
      id="tooltipDiv"
      className="tooltipExtraNone"
      style={{ display: "none" }}
    >
      <div id="tipTitle"></div>
      <hr />
      <div id="tipText"></div>
      <hr />
      <div id="tipCost"></div>
    </div>
  );
}
