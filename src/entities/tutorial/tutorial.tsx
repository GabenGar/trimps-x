export function Tutorial() {
  return (
    <div
      id="tutorialDiv"
      style={{ display: "none" }}
      className="tutorialWidth tutorialDiv"
    >
      <div id="tutorialBookmarks" className="niceScroll noselect">
        &nbsp;
      </div>

      <div id="tutorialInner">
        <div id="tutorialTitle" className="noselect">
          <span id="tutorialSizeBtn" className="icomoon icon-expand"></span>
          <span id="tutorialCloseBtn" className="icmoon icon-close"></span>
          <span className="pointer">
            <span
              id="tutorialBackBtn"
              className="icomoon icon-arrow-left"
            ></span>
            <span className="icomoon icon-star tutorialStar"></span>
          </span>
          ADVISOR <span id="tutorialStep"></span>
          <span className="pointer">
            <span className="icomoon icon-star tutorialStar"></span>
            <span
              id="tutorialNextBtn"
              className="icomoon icon-arrow-right"
            ></span>
          </span>
        </div>
        <hr />
        <div id="tutorialText">
          <div id="tutorialTextInner" className="niceScroll"></div>
        </div>
        <hr />
        <div id="tutorialGoal"></div>
      </div>
    </div>
  );
}
