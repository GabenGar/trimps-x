export function BottomRow() {
  return (
    <div className="row" id="bottomRow">
      <div id="buyCol" className="col-xs-5" style={{ visibility: "hidden" }}>
        <div id="queueContainer">
          <div className="row" id="queueRow">
            <div className="col-xs-4 lowPad">
              <span id="foremenCount"></span>
            </div>

            <div className="col-xs-2 lowPad">
              <span id="buildSpeed"></span>
            </div>

            <div className="col-xs-3 lowPad">
              <div
                id="autoTrapBtn"
                style={{ display: "none" }}
                className="pointer noselect colorDanger autoUpgradeBtn"
              >
                AutoTraps Off
              </div>
            </div>

            <div className="col-xs-3">
              <div
                id="buildingsCollectBtn"
                className="workBtn workColorOff pointer noselect"
              >
                Build
              </div>
            </div>
          </div>
          <div className="queue niceScroll" id="buildingsQueue">
            <span id="noQueue">Nothing in queue...</span>
            <div id="queueItemsHere"></div>
          </div>
        </div>

        <div id="outerBuyContainer">
          <div id="buyTabs">
            <ul id="buyTabsUl" className="nav nav-tabs nav-justified buyTabsUl">
              <li
                role="presentation"
                id="allTab"
                className="tabNotSelected buyTab"
              >
                <a id="allA">All</a>
              </li>
              <li
                role="presentation"
                id="buildingsTab"
                className="tabNotSelected buyTab"
              >
                <a id="buildingsA">
                  <span id="buildingsAlert" className="alert badge"></span>
                  Buildings
                </a>
              </li>
              <li
                role="presentation"
                id="jobsTab"
                style={{ visibility: "hidden" }}
                className="tabNotSelected buyTab"
              >
                <a id="jobsA">
                  <span id="jobsAlert" className="alert badge"></span>Jobs
                </a>
              </li>
              <li
                role="presentation"
                id="upgradesTab"
                style={{ visibility: "hidden" }}
                className="tabNotSelected buyTab"
              >
                <a id="upgradesA">
                  <span id="upgradesAlert" className="alert badge"></span>
                  Upgrades
                </a>
              </li>
              <li
                role="presentation"
                id="equipmentTab"
                style={{ visibility: "hidden" }}
                className="tabNotSelected buyTab"
              >
                <a id="equipmentA">
                  <span id="equipmentAlert" className="alert badge"></span>
                  Equipment
                </a>
              </li>
            </ul>
            <ul
              id="buyTabsUl2"
              className="nav nav-tabs nav-justified buyTabsUl"
            >
              <li
                id="talentsTab"
                className="tabNotSelected buyTab"
                role="presentation"
                style={{ display: "none" }}
              >
                <a id="talentA">
                  <span id="talentsAlert" className="alert badge"></span>
                  <span id="mutatorsAlert" className="alert badge"></span>
                  <span id="MasteryTabName">Mastery</span>
                  <span id="talentsEssenceTotal"></span>
                </a>
              </li>
              <li
                id="equalityTab"
                className="tabNotSelected equalityTabScaling buyTab"
                role="presentation"
                style={{ display: "none" }}
              >
                <a id="equalityA">Equality</a>
              </li>
              <li
                id="natureTab"
                className="tabNotSelected buyTab empowerTabNone"
                role="presentation"
                style={{ display: "none" }}
              >
                <a id="natureA">Nature</a>
              </li>
              <li
                id="playerSpireTab"
                className="tabNotSelected buyTab pausedSpireNo"
                role="presentation"
                style={{ display: "none" }}
              >
                <a id="spireA">Spire</a>
              </li>
              <li
                id="alchemyTab"
                className="tabNotSelected buyTab alchTabNone"
                role="presentation"
                style={{ display: "none" }}
              >
                <a id="alchemyA">Alchemy</a>
              </li>
              <li
                id="autoBattleTab"
                className="tabNotSelected buyTab abTabNone"
                role="presentation"
                style={{ display: "none" }}
              >
                <a id="autoBattleA">SA</a>
              </li>
            </ul>
          </div>

          <div id="numTabs" className="numTabs">
            <ul className="nav nav-tabs nav-justified">
              <li role="presentation" className="tabNotSelected" id="tab1">
                <a id="tab1Text">+1</a>
              </li>
              <li role="presentation" className="tabNotSelected" id="tab2">
                <a id="tab2Text">+10</a>
              </li>
              <li role="presentation" className="tabNotSelected" id="tab3">
                <a id="tab3Text">+25</a>
              </li>
              <li role="presentation" className="tabNotSelected" id="tab4">
                <a id="tab4Text">+100</a>
              </li>
              <li role="presentation" className="tabNotSelected" id="tab5">
                <a id="tab5Text">+1</a>
                <a id="tab5Text2">Custom</a>
              </li>
              <li role="presentation" className="tabNotSelected" id="tab6">
                <a id="tab6Text">Max</a>
              </li>
            </ul>
          </div>

          <div id="buyContainer" className="niceScroll buyContainerSizeSm">
            <div id="buyHere" className="niceScroll buttonSizeLarge">
              <div id="buildingsContainer">
                <div id="buildingsTitleDiv" className="titleDiv">
                  <div className="row">
                    <div className="col-xs-3" style={{ paddingRight: "5px" }}>
                      <span id="buildingsTitleSpan" className="titleSpan">
                        Buildings
                      </span>
                    </div>

                    <div className="col-xs-3 lowPad">&nbsp;</div>

                    <div className="col-xs-3 lowPad">
                      <div
                        id="autoStructureBtn"
                        className="toggleConfigBtn pointer noselect colorDanger autoUpgradeBtn"
                      >
                        <div id="autoStructureText">AutoStructure</div>

                        <div id="autoStructureConfig">
                          <span className="glyphicon glyphicon-cog"></span>
                        </div>
                      </div>
                    </div>

                    <div className="col-xs-3" style={{ paddingLeft: "5px" }}>
                      <div
                        id="autoStorageBtn"
                        className="pointer noselect colorDanger autoUpgradeBtn"
                      >
                        AutoStorage
                      </div>
                    </div>
                  </div>
                </div>

                <div className="buyBox" id="buildingsHere"></div>
              </div>
              <div id="jobsContainer">
                <div
                  id="jobsTitleDiv"
                  className="titleDiv"
                  style={{ display: "none" }}
                >
                  <div className="row">
                    <div className="col-xs-3" style={{ paddingRight: "5px" }}>
                      <span id="jobsTitleSpan" className="titleSpan">
                        Jobs
                      </span>
                    </div>

                    <div className="col-xs-3 lowPad">
                      <span
                        id="jobsTitleUnemployed"
                        className="titleSpan"
                      ></span>
                    </div>

                    <div className="col-xs-3 lowPad">
                      <div
                        id="autoJobsBtn"
                        className="toggleConfigBtn pointer noselect colorDanger autoUpgradeBtn"
                      >
                        <div id="autoJobsText">AutoJobs</div>

                        <div>
                          <span className="glyphicon glyphicon-cog"></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-3" style={{ paddingLeft: "5px" }}>
                      <div
                        id="fireBtn"
                        className="pointer noselect fireBtnNotFiring"
                      >
                        Fire
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buyBox" id="jobsHere"></div>
              </div>
              <div id="upgradesContainer">
                <div
                  id="upgradesTitleDiv"
                  style={{ display: "none" }}
                  className="titleDiv"
                >
                  <div className="row">
                    <div className="col-xs-3" style={{ paddingRight: "5px" }}>
                      <span id="upgradesTitleSpan" className="titleSpan">
                        Upgrades
                        <br />
                        (Research first)
                      </span>
                    </div>
                    <div className="col-xs-3 lowPad">
                      <div
                        id="autoGoldenBtn"
                        className="pointer noselect settingBtn0 autoUpgradeBtn"
                      >
                        <div id="autoGoldenText">AutoGold</div>
                      </div>
                    </div>
                    <div className="col-xs-3 lowPad">
                      <div
                        id="autoPrestigeBtn"
                        className="pointer noselect autoUpgradeBtn settingBtn0"
                      >
                        AutoPrestige
                      </div>
                    </div>
                    <div className="col-xs-3" style={{ paddingLeft: "5px" }}>
                      <div
                        id="autoUpgradeBtn"
                        className="pointer noselect colorDanger autoUpgradeBtn"
                      >
                        AutoUpgrade
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buyBox" id="upgradesHere"></div>
              </div>
              <div id="equipmentContainer">
                <div
                  id="equipmentTitleDiv"
                  style={{ display: "none" }}
                  className="titleDiv"
                >
                  <div className="row">
                    <div className="col-xs-3">
                      <span id="equipmentTitleSpan" className="titleSpan">
                        Equipment
                      </span>
                    </div>
                    <div className="col-xs-3 lowPad">&nbsp;</div>
                    <div className="col-xs-3 lowPad">&nbsp;</div>
                    <div className="col-xs-3" style={{ paddingLeft: "5px" }}>
                      <div
                        id="autoEquipBtn"
                        className="toggleConfigBtn pointer noselect colorDanger autoUpgradeBtn"
                      >
                        <div id="autoEquipText">AutoEquip</div>
                        <div id="autoEquipConfig">
                          <span className="glyphicon glyphicon-cog"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="buyBox" id="equipmentHere"></div>
              </div>

              <div id="talentsContainer" style={{ display: "none" }}>
                <div
                  style={{ display: "none", width: "100%" }}
                  id="swapToMutatorsBtn"
                  className="btn btn-primary btn-lg"
                >
                  Swap to Mutators
                  <span id="mutatorsAlert2" className="alert badge"></span>
                </div>

                <div className="row noMarg">
                  <div className="col-xs-3 lowPad">
                    <div id="talentsAffordable"></div>
                  </div>
                  <div className="col-xs-6 lowPad">
                    <div id="talentsTitle">
                      <span id="essenceOwned">0</span> Dark Essence
                    </div>
                  </div>
                  <div className="col-xs-3 lowPad">
                    <div
                      className="pointer noselect colorDanger"
                      id="talentRespecBtn"
                    >
                      Respec (20 bones)
                    </div>
                  </div>
                </div>
                <div id="talentsCost">
                  Your next mastery costs
                  <span id="talentsNextCost">0</span>.
                </div>
                <div id="talentsHere"></div>
              </div>
              <div
                id="natureContainer"
                style={{ display: "none", height: "100%" }}
              >
                <div className="row noMarg" style={{ height: "100%" }}>
                  <div
                    id="tabColPoison"
                    className="col-xs-4 tabColPoison tabColNature noPad"
                  >
                    <div className="natureTop">
                      <div className="natureTitle">
                        <span id="infoSpanPoison" className="infoSpanNature">
                          <span className="icomoon icon-info2"></span>
                        </span>
                        Poison
                      </div>
                      Tokens: <span id="tokenCountPoison">0</span>
                    </div>
                    <span
                      id="natureUpgradePoison"
                      className="natureBuyIcon noselect"
                    >
                      <span
                        className="natureUpgradeLevel"
                        id="natureUpgradePoisonLevel"
                      ></span>
                      <span
                        className="natureUpgradeCost"
                        id="natureUpgradePoisonCost"
                      ></span>
                      <span className="natureBigIcon icomoon icon-plus"></span>
                    </span>
                    <span
                      id="natureUpgradeTransferPoison"
                      className="natureBuyIcon noselect"
                    >
                      <span
                        className="natureUpgradeLevel"
                        id="natureStackTransferPoisonLevel"
                      ></span>
                      <span
                        className="natureUpgradeCost"
                        id="natureStackTransferPoisonCost"
                      ></span>
                      <span className="natureBigIcon icomoon icon-rotate-left"></span>
                    </span>
                    <span
                      id="uberPoisonContainer"
                      className="natureBuyIcon natureUberContainer noselect"
                    >
                      <span
                        className="natureUpgradeLevel natureUberName"
                        id="uberPoisonName"
                      ></span>
                      <span
                        className="natureUpgradeCost"
                        id="natureUberEmpowerPoisonCost"
                      ></span>
                      <span className="natureBigIcon glyphicon glyphicon-king"></span>
                    </span>
                    <div className="transferButtons">
                      <span
                        id="natureConvertPoisonWind"
                        className="natureBuyIcon noselect natureBuyIconMini"
                      >
                        <span
                          className="natureUpgradeCost"
                          id="naturePoisonWindCost"
                        ></span>
                        <span className="natureSmallIcon icomoon icon-shuffle3"></span>
                        <span className="natureSmallIcon icomoon icon-air"></span>
                      </span>
                      <span
                        id="natureConvertPoisonIce"
                        className="natureBuyIcon noselect natureBuyIconMini"
                      >
                        <span
                          className="natureUpgradeCost"
                          id="naturePoisonIceCost"
                        ></span>
                        <span className="natureSmallIcon icomoon icon-shuffle3"></span>
                        <span className="natureSmallIcon glyphicon glyphicon-certificate"></span>
                      </span>
                    </div>
                    <span className="natureBackgroundIcon icomoon icon-flask"></span>
                  </div>

                  <div
                    id="tabColWind"
                    className="col-xs-4 tabColWind tabColNature noPad"
                  >
                    <div className="natureTop">
                      <div className="natureTitle">
                        <span id="infoSpanWind" className="infoSpanNature">
                          <span className="icomoon icon-info2"></span>
                        </span>
                        Wind
                      </div>
                      Tokens: <span id="tokenCountWind">0</span>
                    </div>
                    <span
                      id="natureUpgradeLevelWind"
                      className="natureBuyIcon noselect"
                    >
                      <span
                        className="natureUpgradeLevel"
                        id="natureUpgradeWindLevel"
                      ></span>
                      <span
                        className="natureUpgradeCost"
                        id="natureUpgradeWindCost"
                      ></span>
                      <span className="natureBigIcon icomoon icon-plus"></span>
                    </span>
                    <span
                      id="natureUpgradeTransferWind"
                      className="natureBuyIcon noselect"
                    >
                      <span
                        className="natureUpgradeLevel"
                        id="natureStackTransferWindLevel"
                      ></span>
                      <span
                        className="natureUpgradeCost"
                        id="natureStackTransferWindCost"
                      ></span>
                      <span className="natureBigIcon icomoon icon-rotate-left"></span>
                    </span>
                    <span
                      id="uberWindContainer"
                      className="natureBuyIcon natureUberContainer noselect"
                    >
                      <span
                        className="natureUpgradeLevel natureUberName"
                        id="uberWindName"
                      ></span>
                      <span
                        className="natureUpgradeCost"
                        id="natureUberEmpowerWindCost"
                      ></span>
                      <span className="natureBigIcon glyphicon glyphicon-king"></span>
                    </span>
                    <div className="transferButtons">
                      <span
                        id="natureTransferWindPoison"
                        className="natureBuyIcon noselect natureBuyIconMini"
                      >
                        <span
                          className="natureUpgradeCost"
                          id="natureWindPoisonCost"
                        ></span>
                        <span className="natureSmallIcon icomoon icon-shuffle3"></span>
                        <span className="natureSmallIcon icomoon icon-flask"></span>
                      </span>
                      <span
                        id="natureTransferWindIce"
                        className="natureBuyIcon noselect natureBuyIconMini"
                      >
                        <span
                          className="natureUpgradeCost"
                          id="natureWindIceCost"
                        ></span>
                        <span className="natureSmallIcon icomoon icon-shuffle3"></span>
                        <span className="natureSmallIcon glyphicon glyphicon-certificate"></span>
                      </span>
                    </div>
                    <span className="natureBackgroundIcon icomoon icon-air"></span>
                  </div>

                  <div
                    id="tabColIce"
                    className="col-xs-4 tabColIce tabColNature noPad"
                  >
                    <div className="natureTop">
                      <div className="natureTitle">
                        <span
                          id="infoSpanIce"
                          className="infoSpanNature"
                        ></span>
                        Ice
                      </div>
                      Tokens: <span id="tokenCountIce">0</span>
                    </div>
                    <span
                      id="natureUpgradeLevelIce"
                      className="natureBuyIcon noselect"
                    >
                      <span
                        className="natureUpgradeLevel"
                        id="natureUpgradeIceLevel"
                      ></span>
                      <span
                        className="natureUpgradeCost"
                        id="natureUpgradeIceCost"
                      ></span>
                      <span className="natureBigIcon icomoon icon-plus"></span>
                    </span>
                    <span
                      id="natureUpgradeTransferIce"
                      className="natureBuyIcon noselect"
                    >
                      <span
                        className="natureUpgradeLevel"
                        id="natureStackTransferIceLevel"
                      ></span>
                      <span
                        className="natureUpgradeCost"
                        id="natureStackTransferIceCost"
                      ></span>
                      <span className="natureBigIcon icomoon icon-rotate-left"></span>
                    </span>
                    <span
                      id="uberIceContainer"
                      className="natureBuyIcon noselect natureUberContainer"
                    >
                      <span
                        className="natureUpgradeLevel natureUberName"
                        id="uberIceName"
                      ></span>
                      <span
                        className="natureUpgradeCost"
                        id="natureUberEmpowerIceCost"
                      ></span>
                      <span className="natureBigIcon glyphicon glyphicon-king"></span>
                    </span>
                    <div className="transferButtons">
                      <span
                        id="natureConvertIcePoison"
                        className="natureBuyIcon noselect natureBuyIconMini"
                      >
                        <span
                          className="natureUpgradeCost"
                          id="natureIcePoisonCost"
                        ></span>
                        <span className="natureSmallIcon icomoon icon-shuffle3"></span>
                        <span className="natureSmallIcon icomoon icon-flask"></span>
                      </span>
                      <span
                        id="natureConvertIceWind"
                        className="natureBuyIcon noselect natureBuyIconMini"
                      >
                        <span
                          className="natureUpgradeCost"
                          id="natureIceWindCost"
                        ></span>
                        <span className="natureSmallIcon icomoon icon-shuffle3"></span>
                        <span className="natureSmallIcon icomoon icon-air"></span>
                      </span>
                    </div>
                    <span className="natureBackgroundIcon icomoon icon-certificate"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xs-7" id="rightCol">
        <div id="battleContainer" style={{ visibility: "hidden" }}>
          <div id="battleHeadContainer">
            <div className="row" id="battleStatsRow">
              <div className="col-xs-6" id="goodGuyCol">
                <div className="row">
                  <div
                    id="colGoodGuyName"
                    className="col-xs-9"
                    style={{ paddingRight: "5px" }}
                  >
                    {/* Update in resetGame if adding to name */}
                    <div className="battleStatsTitle" id="goodGuyName">
                      <span id="realTrimpName">Trimps</span>&nbsp;(
                      <span id="trimpsFighting">1</span>){" "}
                      <span id="anticipationSpan"></span>
                      <span id="titimpBuff"></span>
                      <span id="debuffSpan"></span>
                    </div>
                  </div>
                  <div
                    id="colStances"
                    className="col-xs-3"
                    style={{ paddingLeft: "5px" }}
                  >
                    <div className="row noPad" style={{ paddingRight: "15px" }}>
                      <div id="form0Container" className="formFifth noPad">
                        <div
                          id="formation0"
                          className="formationBtn pointer formationStateDisabled"
                        >
                          X
                        </div>
                      </div>
                      <div id="form1Container" className="formFifth noPad">
                        <div
                          id="formation1"
                          className="formationBtn pointer formationStateDisabled"
                        >
                          H
                        </div>
                      </div>
                      <div id="form2Container" className="formFifth noPad">
                        <div
                          id="formation2"
                          className="formationBtn pointer formationStateDisabled"
                        >
                          D
                        </div>
                      </div>
                      <div id="form3Container" className="formFifth noPad">
                        <div
                          id="formation3"
                          className="formationBtn pointer formationStateDisabled"
                        >
                          B
                        </div>
                      </div>
                      <div id="form4Container" className="formFifth noPad">
                        <div
                          id="formation4"
                          className="formationBtn pointer formationStateDisabled"
                        >
                          S
                        </div>
                      </div>
                      <div id="form5Container" className="formSixth noPad">
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

                <div className="row guyRow" id="goodGuyStatsRow">
                  <div
                    id="damageDiv"
                    className="col-xs-6 lbdHover pointer noselect bdHover"
                    style={{ paddingRight: "0" }}
                  >
                    <span
                      id="goodGuyAttack"
                      className="attackColorNormal"
                    ></span>
                    DMG <span id="critSpan"></span>
                  </div>

                  <div
                    className="col-xs-4 noPad pointer noselect bdHover"
                    id="blockDiv"
                    style={{ visibility: "hidden" }}
                  >
                    <span id="goodGuyBlock">0</span>
                    <span id="goodGuyBlockName">BLK</span>
                  </div>

                  <div
                    id="roboTrimpBtn"
                    className="col-xs-2 pointer noselect"
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

              <div
                className="col-xs-6"
                id="badGuyCol"
                style={{ visibility: "hidden" }}
              >
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
                          <span
                            id="badGuyAttack"
                            className="dmgColorWhite"
                          ></span>
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
                        <div
                          id="openTutorialContainer"
                          style={{ display: "none" }}
                        >
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

          <div className="row" id="gridRow">
            <div className="col-xs-2" id="battleBtnsColumn">
              <div id="battleSideTitle">
                <span id="worldName">Zone</span>{" "}
                <span id="worldNumber">1</span>
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
                <span
                  id="heirloomsBtn"
                  className="btn fightBtn heirloomsBtnColor"
                >
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
                <div
                  style={{ display: "none" }}
                  id="mapsCreateRow"
                  className="row"
                >
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
                    <div
                      id="advDifficultyContainerTitle"
                      className="advMapsTitle"
                    >
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
                    <div
                      id="advMapsRow2SpecialModifier"
                      className="advMapsTitle"
                    >
                      Special Modifier
                    </div>
                    <br />
                    <select
                      id="advSpecialSelect"
                      className="advSelect"
                    ></select>
                  </div>

                  <div className="col-xs-2 mapConfigContainer lowPad">
                    <div
                      id="advPerfectLocked"
                      style={{ border: "1px solid white" }}
                    >
                      <div className="advMapsTitle" id="advPerfectLockedText">
                        Unlock at Z110
                      </div>
                      <span className="icomoon icon-lock3"></span>
                    </div>
                    <div id="advPerfectUnlocked" style={{ display: "none" }}>
                      <div
                        id="advPerfectUnlockedTitle"
                        className="advMapsTitle"
                      >
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
                      <select
                        id="advExtraLevelSelect"
                        className="advSelect"
                      ></select>
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
                        <div
                          className="mapStatsValue"
                          id="mapStatsResource"
                        ></div>
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
                    <div
                      className="mapStatsValue"
                      id="mapStatsDifficulty"
                    ></div>
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
                <span
                  id="togglemapLoot2"
                  className="btn settingBtn1 fightBtn"
                ></span>
              </div>

              <div className="battleSideBtnContainer">
                <span
                  id="togglerepeatUntil"
                  className="btn settingBtn1 fightBtn"
                ></span>
              </div>

              <div className="battleSideBtnContainer">
                <span
                  id="toggleexitTo"
                  className="btn settingBtn1 fightBtn"
                ></span>
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
                <span
                  id="toggleclimbBw2"
                  className="btn settingBtn1 fightBtn"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
