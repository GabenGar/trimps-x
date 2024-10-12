export function OfflineWrapper() {
  return <div id="offlineWrapper">
  <div id="offlineInnerWrapper">
    <div id="offlineTitle">Making up lost time...</div>
    <div id="offlineProgressWrapper" className="progress">
      <span id="offlineProgressText">Starting...</span>
      <div
        className="progress-bar"
        role="progressbar"
        id="offlineProgress"
      >
        &nbsp;
      </div>
    </div>
    <div className="row">
      <div className="col-xs-3">
        <div id="offlineZoneNumber">Zone</div>
        <div id="offlineCellNumber">Cell</div>
      </div>
      <div className="col-xs-9">
        <div id="offlineExtraInfo"></div>
      </div>
    </div>
    <div className="row">
      <div id="offlineMapBtns" className="col-xs-6">
        <div id="offlineMapText" style={{ textAlign: "center" }}>
          Wanna run a map?
        </div>
        <div id="offlineMapBtnsInner">
          <span
            id="offlineMapBtn0"
            className="offlineMapBtn btn btn-md btn-success"
          >
            World Level Map
          </span>
          <span
            id="offlineMapBtn1"
            className="offlineMapBtn btn btn-md btn-success"
          >
            -1 Level map
          </span>
          <span
            id="offlineMapBtn2"
            className="offlineMapBtn btn btn-md btn-success"
          >
            -2 Level map
          </span>
          <span
            id="offlineMapBtn3"
            className="offlineMapBtn btn btn-md btn-success"
          >
            -3 Level map
          </span>
        </div>
      </div>
      <div id="offlineZoneBtns" className="col-xs-6">
        <div
          id="offlineInMapDescription"
          style={{ textAlign: "center" }}
        ></div>
        <span
          id="offlineZoneBtn"
          className="offlineExtraBtn btn btn-md btn-primary"
        >
          Back to World
        </span>
      </div>
      <div
        id="offlineExtraBtnsContainer"
        className="col-xs-6"
        style={{ position: "absolute", left: "50%", width: "25%" }}
      >
        <div id="offlineTimeOffline"></div>
        <div className="btn btn-lg btn-info offlineExtraBtn">
          What is This?!
        </div>
        <div className="btn btn-lg btn-danger offlineExtraBtn">
          Stop Here
        </div>
        <div
          className="btn btn-lg btn-warning offlineExtraBtn"
          id="offlineEqualityBtn"
        >
          Show Equality
        </div>
        <div
          className="btn btn-lg btn-primary offlineExtraBtn"
          id="offlineFightBtn"
        >
          Start Fighting
        </div>
        <div id="offlineFormations"></div>
        <div id="offlineSettingContainer"></div>
        <div id="offlineEffective"></div>
      </div>
    </div>
  </div>
</div>
}
