import styles from "./trimps.module.scss"

export function Trimps() {
  return (
    <div id="trimpsColumn" className={styles.block}>
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
