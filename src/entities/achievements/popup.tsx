export function AchievementsPopup() {
  return (
    <div id="achievementPopup" style={{ display: "none" }}>
      <span className="achievementBtns">
        <span className="achievementBtnGo icomoon icon-newspaper-o"></span>
        <span className="achievementBtnClose icomoon icon-close"></span>
      </span>
      <div className="row">
        <div
          id="achievementPopupIconContainer"
          className="col-xs-3 lowPad"
        ></div>
        <div className="col-xs-8">
          <div id="achievementPopupTitle"></div>
          <div id="achievementPopupDescription"></div>
          <div id="achievementPopupReward"></div>
        </div>
      </div>
    </div>
  );
}
