export function HeirloomsPopup() {
  return (
    <div id="heirloomsPopup" style={{ display: "none" }}>
      <div id="heirloomsPopupBtns">
        You Found an Heirloom!
        <span className="heirloomPopupBtn icomoon icon-close"></span>
        <span className="heirloomPopupBtn icomoon icon-archive"></span>
      </div>

      <div id="heirloomsPopupHere"></div>
    </div>
  );
}
