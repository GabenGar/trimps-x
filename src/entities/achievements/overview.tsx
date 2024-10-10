export function AchievementsOverview() {
  return <div id="achievementWrapper" style={{ display: "none" }}>
  <div id="achievementMainButtons">
    <span
      id="achievementHelp"
      className="icomoon icon-question-circle"
    ></span>
    <span id="achievementMainClose" className="icomoon icon-close"></span>
  </div>

  <div className="row" id="achievementTopRow">
    <div className="col-xs-6">
      <div id="achievementHover" style={{ display: "none" }}>
        <div className="row">
          <div
            id="achievementHoverIconContainer"
            className="col-xs-3 lowPad"
          ></div>

          <div className="col-xs-8">
            <div id="achievementHoverTitle"></div>
            <div id="achievementHoverDescription"></div>
            <div id="achievementHoverProgress"></div>
            <div id="achievementHoverReward"></div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-xs-6">
      <div className="maxCenter" id="achievementHeader">
        <span className="achievementMainTitle">Achievements</span>
        <br />
        <span className="achievementTotals">
          You are dealing <span id="achievementTotalPercent"></span>%
          extra damage<span id="achievementFluff"></span>.
        </span>
        <div id="achievementGoldenBonusContainer"></div>
      </div>
      <div id="achievementHelpContainer" style={{ display: "none" }}>
        You can earn achievements by doing stuff. Each achievement will
        boost the amount of damage your Trimps can deal, and later
        achievements grant a larger bonus. You can learn more about an
        achievement by hovering your mouse over it.
        <b>Click on an Achievement on this screen to track it!</b>
      </div>
    </div>

    <div className="col-xs-1"></div>
  </div>

  <div id="achievementsHere" className="niceScroll"></div>

  <div style={{ textAlign: "center" }}>
    <span id="achievementClose2" className="icomoon icon-close"></span>
  </div>
</div>
}
