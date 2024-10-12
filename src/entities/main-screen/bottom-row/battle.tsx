import styles from "./battle.module.scss";

export function Battle() {
  return (
    <div id="gridRow" className={styles.block}>
      <div id="battleBtnsColumn" className={styles.buttons}>
        <div id="battleSideTitle" className={styles.title}>
          <span id="worldName">Zone</span> <span id="worldNumber">1</span>
          <br />
          <span id="mapBonus"></span>
        </div>

        <div className={styles.button}>
          <span className="btn btn-primary fightBtn" id="fightBtn">
            Fight
          </span>
        </div>

        <div className={styles.button}>
          <span
            className="btn btn-danger fightBtn"
            id="pauseFight"
            style={{ display: "none" }}
          >
            AutoFight Off
          </span>
        </div>

        <div className={styles.button}>
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

        <div className={styles.button}>
          <span
            className="btn voidMessage fightBtn"
            id="voidMapsBtn"
            style={{ display: "none" }}
          >
            Void Maps
          </span>
        </div>

        <div className={styles.button}>
          <span
            className="btn btn-info fightBtn"
            id="portalBtn"
            style={{ display: "none" }}
          >
            Portal
          </span>
        </div>

        <div className={styles.button}>
          <span
            className="btn btn-danger fightBtn"
            id="repeatBtn"
            style={{ display: "none" }}
          >
            Repeat Off
          </span>
        </div>

        <div
          id="heirloomBtnContainer"
          className={styles.button}
          style={{ display: "none" }}
        >
          <span id="heirloomsBtn" className="btn fightBtn heirloomsBtnColor">
            Heirlooms
          </span>
        </div>

        <div
          id="boneBtnContainer"
          className={styles.button}
          style={{ display: "none" }}
        >
          <span className="btn btn-default fightBtn" id="boneBtnMain">
            <span id="boneBtnText">Bone Trader</span>
          </span>
        </div>

        <div
          id="finishDailyBtnContainer"
          className={styles.button}
          style={{ display: "none" }}
        >
          <span className="btn btn-success fightBtn" id="finishDailyBtn">
            Finish Daily
          </span>
        </div>

        <div
          id="exitSpireBtnContainer"
          className={styles.button}
          style={{ display: "none" }}
        >
          <span className="btn btn-danger fightBtn" id="exitSpireBtn">
            Exit Spire
          </span>
        </div>
      </div>

      <div id="gridContainer">
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
