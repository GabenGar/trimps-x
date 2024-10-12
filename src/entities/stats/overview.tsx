export function StatsOverview() {
  return (
    <div id="statsWrapper" style={{ display: "none" }}>
      <span id="statsTitle">Statistics!</span>
      <br />
      <div className="row" id="statsBtnRow">
        <div className="col-xs-3"></div>

        <div
          id="totalSelectBtn"
          className="col-xs-2 btn btn-info statToggleBtn"
        >
          Total
        </div>

        <div
          id="currentSelectBtn"
          className="col-xs-2 btn btn-success statToggleBtn"
        >
          Current Run
        </div>

        <div
          id="customSelectBtn"
          className="col-xs-2 btn btn-danger statToggleBtn"
        >
          Customize
        </div>
      </div>
      <br />
      <div className="row" id="statsRow">
        <div className="col-xs-4" id="statCol1"></div>
        <div className="col-xs-4" id="statCol2"></div>
        <div className="col-xs-4" id="statCol3"></div>
      </div>
      <div id="closeStatsBtn" className="btn btn-danger inPortalBtn">
        Close
      </div>
      &nbsp;
      <div id="infoStatsBtn" className="btn btn-info inPortalBtn">
        Trimps Info
      </div>
    </div>
  );
}
