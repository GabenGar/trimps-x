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

function Battle() {
  return (
    <div id="gridRow" className={styles.battle}>
      <div className="col-xs-2" id="battleBtnsColumn">
        <div id="battleSideTitle">
          <span id="worldName">Zone</span> <span id="worldNumber">1</span>
          <br />
          <span id="mapBonus"></span>
        </div>

        <div className="battleSideBtnContainer">
          <span className="btn btn-primary fightBtn" id="fightBtn">
            Fight
          </span>
        </div>

        <div className="battleSideBtnContainer">
          <span
            className="btn btn-danger fightBtn"
            id="pauseFight"
            style={{ display: "none" }}
          >
            AutoFight Off
          </span>
        </div>

        <div className="battleSideBtnContainer">
          <div
            id="mapsBtn"
            className="btn btn-warning fightBtn"
            style={{ display: "none" }}
          >
            <div id="mapsBtnText">Maps</div>
            <div id="configureMaps">
              <span className="glyphicon glyphicon-cog"></span>
            </div>
          </div>
        </div>

        <div className="battleSideBtnContainer">
          <span
            className="btn voidMessage fightBtn"
            id="voidMapsBtn"
            style={{ display: "none" }}
          >
            Void Maps
          </span>
        </div>

        <div className="battleSideBtnContainer">
          <span
            className="btn btn-info fightBtn"
            id="portalBtn"
            style={{ display: "none" }}
          >
            Portal
          </span>
        </div>

        <div className="battleSideBtnContainer">
          <span
            className="btn btn-danger fightBtn"
            id="repeatBtn"
            style={{ display: "none" }}
          >
            Repeat Off
          </span>
        </div>

        <div
          className="battleSideBtnContainer"
          style={{ display: "none" }}
          id="heirloomBtnContainer"
        >
          <span id="heirloomsBtn" className="btn fightBtn heirloomsBtnColor">
            Heirlooms
          </span>
        </div>

        <div
          className="battleSideBtnContainer"
          style={{ display: "none" }}
          id="boneBtnContainer"
        >
          <span className="btn btn-default fightBtn" id="boneBtnMain">
            <span id="boneBtnText">Bone Trader</span>
          </span>
        </div>

        <div
          className="battleSideBtnContainer"
          style={{ display: "none" }}
          id="finishDailyBtnContainer"
        >
          <span className="btn btn-success fightBtn" id="finishDailyBtn">
            Finish Daily
          </span>
        </div>

        <div
          className="battleSideBtnContainer"
          style={{ display: "none" }}
          id="exitSpireBtnContainer"
        >
          <span className="btn btn-danger fightBtn" id="exitSpireBtn">
            Exit Spire
          </span>
        </div>
      </div>

      <div className="col-xs-10" id="gridContainer">
        <div id="grid"></div>

        <div id="preMaps" style={{ display: "none" }}>
          <div style={{ display: "none" }} id="mapsCreateRow" className="row">
            <div id="openTutorialContainer2" style={{ display: "none" }}>
              <span
                id="openTutorialBtn2"
                className="flashNo icomoon icon-star pointer tutorialStar"
                style={{ color: "gold" }}
              ></span>
            </div>
            <div id="advMapsControlBtns">
              <span
                id="advMapsHideBtn"
                className="icomoon icon-minus-circle pointer"
              ></span>
              <span
                id="advMapsPreset1"
                className="pointer mapPreset presetSelectionOff"
              >
                1
              </span>
              <span
                id="advMapsPreset2"
                className="pointer mapPreset presetSelectionOff"
              >
                2
              </span>
              <span
                id="advMapsPreset3"
                className="pointer mapPreset presetSelectionOff"
              >
                3
              </span>
              <span
                id="advMapsPreset4"
                className="pointer mapPreset presetSelectionOff"
              >
                4
              </span>
              <span
                id="advMapsPreset5"
                className="pointer mapPreset presetSelectionOff"
              >
                5
              </span>
              <span
                id="advMapsSaveBtn"
                className="icomoon icon-save pointer"
              ></span>
              <span
                id="advMapsResetBtn"
                className="icomoon icon-refresh pointer"
              ></span>
              <span
                id="advMapsRecycleBtn"
                className="icomoon icon-trash-o pointer iconStateBad"
              ></span>
            </div>
            <div id="mapLevelContainer" className="col-xs-4">
              Level
              <span
                id="incrementMapLevelBtn"
                className="pointer noselect incrementBtn"
              >
                <span className="glyphicon glyphicon-download"></span>
              </span>
              <input id="mapLevelInput" type="number" />
              <span
                id="decrementMapLevelBtn"
                className="pointer noselect incrementBtn"
              >
                <span className="glyphicon glyphicon-upload"></span>
              </span>
            </div>

            <div id="mapCostContainer" className="col-xs-4 lowPad">
              <span id="mapCostFragmentCost"></span>
              <span id="mapCostFragmentText"> Fragments</span>
            </div>

            <div
              id="mapCreateBtn"
              className="workBtn primaryColor pointer noselect col-xs-4"
            >
              Create
            </div>
          </div>

          <div id="advMapsRow" className="row">
            <div
              id="advLootContainer"
              className="col-xs-3 mapConfigContainer lowPad"
            >
              <div id="advLootContainerTitle" className="advMapsTitle">
                Loot
              </div>
              <br />
              <input
                id="lootAdvMapsRange"
                className="mapSelector mapInput"
                type="range"
                min="0"
                max="9"
                defaultValue="0"
              />
              <div id="lootAdvMapsText"></div>
            </div>

            <div
              id="advSizeContainer"
              className="col-xs-3 mapConfigContainer lowPad"
            >
              <div id="advSizeContainerTitle" className="advMapsTitle">
                Size
              </div>
              <br />
              <input
                id="sizeAdvMapsRange"
                defaultValue="0"
                className="mapSelector mapInput"
                type="range"
                min="0"
                max="9"
              />
              <div id="sizeAdvMapsText"></div>
            </div>

            <div
              id="advDifficultyContainer"
              className="col-xs-3 mapConfigContainer lowPad"
            >
              <div id="advDifficultyContainerTitle" className="advMapsTitle">
                Difficulty
              </div>
              <br />
              <input
                id="difficultyAdvMapsRange"
                className="mapSelector mapInput"
                type="range"
                min="0"
                max="9"
                defaultValue="0"
              />
              <div id="difficultyAdvMapsText"></div>
            </div>

            <div
              id="advBiomeContainer"
              className="col-xs-3 mapConfigContainer lowPad"
            >
              <div className="advMapsTitle">Biome</div>
              <br />
              <select id="biomeAdvMapsSelect" className="advSelect">
                <option value="Random">Random</option>
                <option value="Mountain">Mountain</option>
                <option value="Forest">Forest</option>
                <option value="Sea">Sea</option>
                <option value="Depths">Depths</option>
              </select>
            </div>
          </div>

          <div id="advMapsRow2" className="row">
            <div className="col-xs-2 mapConfigContainer lowPad"></div>

            <div className="col-xs-3 mapConfigContainer lowPad">
              <div id="advMapsRow2SpecialModifier" className="advMapsTitle">
                Special Modifier
              </div>
              <br />
              <select id="advSpecialSelect" className="advSelect"></select>
            </div>

            <div className="col-xs-2 mapConfigContainer lowPad">
              <div id="advPerfectLocked" style={{ border: "1px solid white" }}>
                <div className="advMapsTitle" id="advPerfectLockedText">
                  Unlock at Z110
                </div>
                <span className="icomoon icon-lock3"></span>
              </div>
              <div id="advPerfectUnlocked" style={{ display: "none" }}>
                <div id="advPerfectUnlockedTitle" className="advMapsTitle">
                  Perfect Sliders
                </div>
                <br />
                <span
                  id="advPerfectCheckbox"
                  className="icomoon icon-checkbox-unchecked niceCheckbox"
                  data-checked="false"
                ></span>
              </div>
            </div>

            <div className="col-xs-3 mapConfigContainer lowPad">
              <div
                id="advExtraLevelLocked"
                style={{ border: "1px solid white" }}
              >
                <div className="advMapsTitle" id="advExtraLockedText">
                  Unlock at Z210
                </div>
                <span className="icomoon icon-lock3"></span>
              </div>
              <div id="advExtraLevelUnlocked" style={{ display: "none" }}>
                <div id="advExtraLevelTitle" className="advMapsTitle">
                  Extra Zones
                </div>
                <br />
                <select id="advExtraLevelSelect" className="advSelect"></select>
              </div>
            </div>

            <div className="col-xs-2 mapConfigContainer lowPad"></div>
          </div>

          <div id="heirRare" style={{ display: "none" }}></div>

          <div id="selectedMapContainer" className="row">
            <div id="selectedMapCol" className="col-xs-3 lowPad">
              <div id="selectedMapName"></div>
              <br />
              <div
                id="mapCreditsLeft"
                title="Earn 1 Credit for each zone you clear while on this challenge"
              ></div>
            </div>

            <div id="mapStatsCol3" className="col-xs-5 lowPad">
              <div className="row">
                <div className="col-xs-7 mapStatsCol">
                  <div className="mapStatsTitle">Items</div>
                  <div className="mapStatsTitle">Resource</div>
                </div>
                <div id="mapStatsCol4" className="col-xs-5 mapStatsCol">
                  <div className="mapStatsValue" id="mapStatsItems"></div>
                  <div className="mapStatsValue" id="mapStatsResource"></div>
                </div>
              </div>
              <div id="selectMapBtns">
                <span
                  id="selectMapBtn"
                  className="workBtn pointer noselect infoColor selectMapBtn"
                  style={{ visibility: "hidden" }}
                >
                  Run Map
                </span>
                <span
                  id="recycleMapBtn"
                  className="workBtn pointer noselect dangerColor selectMapBtn"
                  style={{ visibility: "hidden" }}
                >
                  Recycle Map
                </span>
              </div>
            </div>

            <div id="mapStatsCol1" className="col-xs-2 mapStatsCol">
              <div className="mapStatsTitle">Size</div>
              <div className="mapStatsTitle">Difficulty</div>
              <div className="mapStatsTitle">Loot</div>
            </div>

            <div id="mapStatsCol2" className="col-xs-2 mapStatsCol">
              <div className="mapStatsValue" id="mapStatsSize"></div>
              <div className="mapStatsValue" id="mapStatsDifficulty"></div>
              <div className="mapStatsValue" id="mapStatsLoot"></div>
            </div>
          </div>

          <div id="mapsHere" className="mapSize1 niceScroll"></div>

          <div id="voidMapsHere" className="niceScroll"></div>
        </div>

        <div
          id="mapGrid"
          className="gridShrunk"
          style={{ display: "none" }}
        ></div>

        <div id="extraGridInfo" style={{ display: "none" }}>
          <div id="extraGridInfoTitle"></div>
          <div id="extraGridInfoSummary"></div>
          <div id="extraGridInfoSub"></div>
          <div id="extraGridInfoBtns">
            <span id="extraGridInfoBtnsContinue" className="btn btn-info">
              Continue
            </span>
          </div>
        </div>
      </div>

      <div id="extraMapBtns" className="col-xs-off">
        <div className="battleSideBtnContainer">
          <span id="togglemapLoot2" className="btn settingBtn1 fightBtn"></span>
        </div>

        <div className="battleSideBtnContainer">
          <span
            id="togglerepeatUntil"
            className="btn settingBtn1 fightBtn"
          ></span>
        </div>

        <div className="battleSideBtnContainer">
          <span id="toggleexitTo" className="btn settingBtn1 fightBtn"></span>
        </div>

        <div className="battleSideBtnContainer">
          <span
            id="togglemapAtZone2"
            className="btn settingBtn1 fightBtn"
          ></span>
        </div>

        <div
          className="battleSideBtnContainer"
          style={{ display: "none" }}
          id="repeatVoidsContainer"
        >
          <span
            id="togglerepeatVoids"
            className="btn settingBtn1 fightBtn"
          ></span>
        </div>

        <div
          className="battleSideBtnContainer"
          style={{ display: "none" }}
          id="climbBwContainer"
        >
          <span id="toggleclimbBw2" className="btn settingBtn1 fightBtn"></span>
        </div>
      </div>
    </div>
  );
}
