import styles from "./resources.module.scss";

export function Resources() {
  return (
    <div id="resourceColumn" className={styles.block}>
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
