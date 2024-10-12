import styles from "./logs.module.scss";

export function Logs() {
  return (
    <div id="logColumn" className={styles.block}>
      <Buttons />

      <AchievementTracker />

      <div id="log" className="niceScroll">
        <span className="StoryMessage message">
          <span className="glyphicon glyphicon-star"></span>A green shimmer
          erupts then disappears, and you hit the ground. You look pretty
          hungry...
        </span>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div
      className="btn-group btn-group-justified"
      id="logBtnGroup"
      role="group"
    >
      <div className="btn-group" role="group">
        <button
          id="StoryFilter"
          type="button"
          className="btn btn-success logFlt"
        >
          Story
        </button>
      </div>

      <div className="btn-group" role="group">
        <button
          id="LootFilter"
          type="button"
          className="btn btn-success logFlt"
        >
          Loot
        </button>
      </div>

      <div className="btn-group" role="group">
        <button
          id="UnlocksFilter"
          type="button"
          className="btn btn-success logFlt"
        >
          Unlocks
        </button>
      </div>

      <div className="btn-group" role="group">
        <button
          id="CombatFilter"
          type="button"
          className="btn btn-success logFlt"
        >
          Combat
        </button>
      </div>

      <div id="logConfigHolder" className="btn-group" role="group">
        <button
          id="logConfigBtn"
          type="button"
          className="btn btn-default logFlt"
        >
          <span className="glyphicon glyphicon-cog"></span>
        </button>
      </div>
    </div>
  );
}

/**
 * @TODO
 * fix styling once
 */
function AchievementTracker() {
  return (
    <div id="achievementTracker" className={styles.achievement}>
      <span
        id="closeTrackedAchieve"
        className="icomoon icon-close"
        style={{ cursor: "pointer" }}
      ></span>
      <div id="achievementTrackerIconContainer"></div>

      <div>
        <div
          id="achievementTrackerTitle"
          style={{ whiteSpace: "nowrap" }}
        ></div>
        <div id="achievementTrackerDescription"></div>
      </div>

      <div>
        <div id="achievementTrackerProgress" className="trackerProgress"></div>
        <div id="achievementTrackerReward"></div>
      </div>
      <div>&nbsp;</div>
    </div>
  );
}
