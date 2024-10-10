import styles from "./top-row.module.scss";

export function TopRow() {
  return (
    <div id="topRow" className={styles.block}>
      <Logs />

      <Trimps />

      <Miscelaneous />

      <Resources />
    </div>
  );
}

function Resources() {
  return (
    <div id="resourceColumn" className={styles.resources}>
      <div id="food" className="playerGather">
        <div
          id="boneShrineBtn"
          style={{ display: "none" }}
          className="isEmpty noselect"
        ></div>
        <span className="title">Food</span>
        <br />
        <span className="ownedArea bdHover">
          <span id="foodOwned">0</span> / <span id="foodMax"></span>
        </span>
        <br />
        <div className="progress resProgress">
          <div
            className="progress-bar percentColorBlue"
            id="foodBar"
            role="progressbar"
          >
            <span id="foodTimeToFill"></span>
          </div>
        </div>
        <div className="collectRow">
          <div>
            <span
              className="psText sizeSecRegular pointer noselect"
              id="foodPs"
            >
              +0/sec
            </span>
          </div>
          <div
            id="foodCollectBtn"
            className="workBtn workColorOff pointer noselect"
          >
            Gather
          </div>
        </div>
      </div>

      <div id="wood" className="playerGather" style={{ visibility: "hidden" }}>
        <span className="title">Wood</span>
        <br />
        <span className="ownedArea bdHover">
          <span id="woodOwned">0</span> / <span id="woodMax"></span>
        </span>
        <br />
        <div className="progress resProgress">
          <div
            className="progress-bar percentColorBlue"
            id="woodBar"
            role="progressbar"
          >
            <span id="woodTimeToFill"></span>
          </div>
        </div>

        <div className="collectRow">
          <div>
            <span
              className="psText sizeSecRegular pointer noselect"
              id="woodPs"
            >
              +0/sec
            </span>
          </div>

          <div
            id="woodCollectBtn"
            className="workBtn workColorOff pointer noselect"
          >
            Chop
          </div>
        </div>
      </div>

      <div id="metal" className="playerGather" style={{ visibility: "hidden" }}>
        <span className="title">Metal</span>
        <br />
        <span className="ownedArea bdHover">
          <span id="metalOwned">0</span> / <span id="metalMax"></span>
        </span>
        <br />
        <div className="progress resProgress">
          <div
            className="progress-bar percentColorBlue"
            id="metalBar"
            role="progressbar"
          >
            <span id="metalTimeToFill"></span>
          </div>
        </div>
        <div className="collectRow">
          <div>
            <span
              className="psText sizeSecRegular pointer noselect"
              id="metalPs"
            >
              +0/sec
            </span>
          </div>
          <div
            id="metalCollectBtn"
            className="workBtn workColorOff pointer noselect"
          >
            Mine
          </div>
        </div>
      </div>

      <div
        id="science"
        className="playerGather"
        style={{ visibility: "hidden" }}
      >
        <span className="title">Science</span>
        <br />
        <span className="ownedArea">
          <span id="scienceOwned">0</span>
        </span>
        <br />
        <div className="collectRow">
          <div>
            <span
              className="psText sizeSecRegular pointer noselect"
              id="sciencePs"
            >
              +0/sec
            </span>
          </div>
          <div
            id="scienceCollectBtn"
            className="workBtn workColorOff pointer noselect"
          >
            Research
          </div>
        </div>
      </div>
    </div>
  );
}

function Miscelaneous() {
  return (
    <div id="miscColumn" className={styles.miscelaneous}>
      <div
        id="fragments"
        className="playerGather playerGatherSm"
        style={{ visibility: "hidden" }}
      >
        <span className="title">Fragments</span>
        <br />
        <span className="ownedArea">
          <span id="fragmentsOwned">0</span>
        </span>
        <br />
        <span
          className="psText sizeSecRegular pointer noselect"
          id="fragmentsPs"
          style={{ display: "none" }}
        >
          +0/sec
        </span>
      </div>

      <div
        id="gems"
        className="playerGather playerGatherSm"
        style={{ visibility: "hidden" }}
      >
        <span className="title">Gems</span>
        <br />
        <span className="ownedArea">
          <span id="gemsOwned">0</span>
        </span>
        <br />
        <span
          className="psText sizeSecRegular pointer noselect"
          id="gemsPs"
          style={{ display: "none" }}
        >
          +0/sec
        </span>
      </div>

      <div
        id="helium"
        className="playerGather playerGatherSm"
        style={{ display: "none" }}
      >
        <span id="heliumName" className="title">
          Helium
        </span>
        <br />
        <span className="ownedArea">
          <span id="heliumOwned">0</span>
        </span>
        <br />
        <span id="heliumPh" className="heliumPh hePhColorNormal"></span>
      </div>
    </div>
  );
}

function Trimps() {
  return (
    <div id="trimpsColumn">
      <div
        id="trimps"
        className="playerGather"
        style={{ visibility: "hidden" }}
      >
        <div>
          <div style={{ paddingRight: "0" }}>
            <div id="turkimpBuff" style={{ display: "none" }}>
              <span className="icomoon icon-spoon-knife"></span>
              <br />
              <span id="turkimpTime"></span>
            </div>
          </div>

          <div>
            <div className="maxCenter">
              <span id="trimpTitle" className="title">
                ???
              </span>
            </div>
          </div>

          <div style={{ paddingLeft: "0" }}>
            <div id="fluffyBox" style={{ display: "none" }}>
              <span className="fluffyIcon glyphicon glyphicon-user"></span>
              &nbsp;Lv<span id="fluffyLevel"></span>
              <br />
              <div className="progress" id="fluffyExpContainer">
                <span className="progress-bar noTransition" id="fluffyExp">
                  &nbsp;
                </span>
              </div>
            </div>
          </div>
        </div>
        <span className="ownedArea pointer noselect bdHover">
          <span id="trimpsOwned">0</span> /<span id="trimpsMax">10</span>
        </span>
        <br />
        <div className="progress resProgress">
          <div
            className="progress-bar percentColorBlue"
            id="trimpsBar"
            role="progressbar"
          >
            <span id="trimpsTimeToFill"></span>
          </div>
        </div>
        <div id="unempHide" style={{ visibility: "hidden" }}>
          <span id="trimpsUnemployed">0</span>&nbsp;
          <span id="trimpsBreedingTitle">breeding</span>
          <br />
          <span
            id="trimpsPs"
            className="pointer sizeSecRegular noselect bdHover psColorWhite"
          >
            +0/sec
          </span>
          <br />
        </div>
        <div id="empHide" style={{ visibility: "hidden" }}>
          <span id="trimpsEmployed">0</span>/<span id="maxEmployed">0</span>
          employed
        </div>
        <div id="trapArea">
          <div
            id="trimpsCollectBtn"
            className="workBtn workColorOff pointer noSelect"
          >
            Check&nbsp;Traps&nbsp;(<span id="trimpTrapText">1</span>)
          </div>
          <div
            id="trimpsCollecting"
            className="collecting"
            style={{ display: "none" }}
          >
            Trapping (<span id="trimpTrapText2">1</span>)
          </div>
          <div className="progress" id="trappingProgress">
            <div
              className="progress-bar"
              id="trappingBar"
              role="progressbar"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logs() {
  return (
    <div id="logColumn" className={styles.logs}>
      <div id="logContainer">
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

        <div id="achievementTracker">
          <div className="row">
            <span
              id="closeTrackedAchieve"
              className="icomoon icon-close"
              style={{ cursor: "pointer" }}
            ></span>
            <div
              id="achievementTrackerIconContainer"
              className="col-xs-2 noPad"
            ></div>
            <div className="col-xs-5 noPad">
              <div
                id="achievementTrackerTitle"
                style={{ whiteSpace: "nowrap" }}
              ></div>
              <div id="achievementTrackerDescription"></div>
            </div>
            <div className="col-xs-4 noPad">
              <div
                id="achievementTrackerProgress"
                className="trackerProgress"
              ></div>
              <div id="achievementTrackerReward"></div>
            </div>
            <div className="col-xs-1 noPad">&nbsp;</div>
          </div>
        </div>

        <div id="log" className="niceScroll">
          <span className="StoryMessage message">
            <span className="glyphicon glyphicon-star"></span>A green shimmer
            erupts then disappears, and you hit the ground. You look pretty
            hungry...
          </span>
        </div>
      </div>
    </div>
  );
}
