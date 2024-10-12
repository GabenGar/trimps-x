import { Battle } from "./battle";
import styles from "./combat.module.scss";

export function Combat() {
  return (
    <div id="rightCol" className={styles.block}>
      <div
        id="battleContainer"
        className={styles.container}
        style={{ visibility: "hidden" }}
      >
        <BattleHead />

        <Battle />
      </div>
    </div>
  );
}

function BattleHead() {
  return (
    <div id="battleHeadContainer" className={styles.head}>
      <div id="battleStatsRow" className={styles.stats}>
        <div id="goodGuyCol">
          <div>
            <div id="colGoodGuyName">
              {/* Update in resetGame if adding to name */}
              <div className="battleStatsTitle" id="goodGuyName">
                <span id="realTrimpName">Trimps</span>&nbsp;(
                <span id="trimpsFighting">1</span>){" "}
                <span id="anticipationSpan"></span>
                <span id="titimpBuff"></span>
                <span id="debuffSpan"></span>
              </div>
            </div>

            <div id="colStances">
              <div className={styles.stances}>
                <div id="form0Container" className={styles.stance}>
                  <div
                    id="formation0"
                    className="formationBtn pointer formationStateDisabled"
                  >
                    X
                  </div>
                </div>
                <div id="form1Container" className={styles.stance}>
                  <div
                    id="formation1"
                    className="formationBtn pointer formationStateDisabled"
                  >
                    H
                  </div>
                </div>
                <div id="form2Container" className={styles.stance}>
                  <div
                    id="formation2"
                    className="formationBtn pointer formationStateDisabled"
                  >
                    D
                  </div>
                </div>
                <div id="form3Container" className={styles.stance}>
                  <div
                    id="formation3"
                    className="formationBtn pointer formationStateDisabled"
                  >
                    B
                  </div>
                </div>
                <div id="form4Container" className={styles.stance}>
                  <div
                    id="formation4"
                    className="formationBtn pointer formationStateDisabled"
                  >
                    S
                  </div>
                </div>
                <div id="form5Container" className={styles.stance}>
                  <div
                    id="formation5"
                    className="formationBtn pointer formationStateDisabled"
                  >
                    N
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="guyRow" id="goodGuyStatsRow">
            <div
              id="damageDiv"
              className="lbdHover pointer noselect bdHover"
              style={{ paddingRight: "0" }}
            >
              <span id="goodGuyAttack" className="attackColorNormal"></span>
              DMG <span id="critSpan"></span>
            </div>

            <div
              className="noPad pointer noselect bdHover"
              id="blockDiv"
              style={{ visibility: "hidden" }}
            >
              <span id="goodGuyBlock">0</span>
              <span id="goodGuyBlockName">BLK</span>
            </div>

            <div
              id="roboTrimpBtn"
              className="pointer noselect"
              style={{ paddingLeft: "0" }}
            >
              <span
                id="chainHolder"
                className="shriekStateCooldown"
                style={{ visibility: "hidden" }}
              >
                <span id="roboTrimpTurnsLeft"></span>
                <span
                  className="icomoon icon-chain"
                  style={{ color: "white" }}
                ></span>
              </span>
            </div>
          </div>

          <div className="progress fightBar">
            <div
              className="progress-bar percentColorBlue"
              id="goodGuyBar"
              role="progressbar"
            >
              <span
                style={{ zIndex: "3" }}
                className="bdHover pointer noselect innerFightBar"
              >
                <span id="goodGuyHealth">0</span>/
                <span id="goodGuyHealthMax">0</span>
              </span>
            </div>

            <div
              className="progress-bar es0"
              role="progressbar"
              id="energyShield"
            >
              &nbsp;
            </div>

            <div
              className="progress-bar es1"
              role="progressbar"
              id="energyShieldLayer"
            >
              &nbsp;
            </div>

            <div
              className="progress-bar es2"
              role="progressbar"
              id="energyShieldLayer2"
            >
              &nbsp;
            </div>
          </div>
        </div>

        <div id="badGuyCol" style={{ visibility: "hidden" }}>
          <div>
            <div className="row">
              <div className="col-xs-11">
                <span className="battleStatsTitle">
                  <span id="badGuyName"></span>
                  <span id="corruptionBuff"></span>
                  <span id="voidBuff"></span>
                  <span
                    id="badCanCrit"
                    style={{ display: "none" }}
                    className="badge"
                  >
                    <span className="icomoon icon-hair-cross"></span>
                  </span>
                  <span id="badDebuffSpan"></span>
                </span>
                <br />
                <div className="guyRow" id="badGuyRow">
                  <div>
                    <span id="badGuyAttack" className="dmgColorWhite"></span>
                    DMG <span id="badCrit"></span>
                  </div>
                </div>
              </div>

              <div
                className="col-xs-1"
                style={{ fontSize: "1.5em", padding: "0" }}
              >
                <div id="lootBdContainer">
                  <span
                    id="lootBdBtn"
                    className="icomoon icon-gift2 pointer"
                  ></span>
                  <div id="openTutorialContainer" style={{ display: "none" }}>
                    <span
                      id="openTutorialBtn"
                      className="flashNo icomoon icon-star pointer tutorialStar"
                      style={{ color: "gold" }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="progress fightBar">
            <div
              className="progress-bar percentColorBlue"
              id="badGuyBar"
              role="progressbar"
            >
              <span className="innerFightBar">
                <span id="badGuyHealth">0</span>/
                <span id="badGuyHealthMax">0</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
