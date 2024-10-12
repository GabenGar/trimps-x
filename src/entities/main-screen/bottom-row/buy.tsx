export function BuyColumn() {
  return (
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
          <ul id="buyTabsUl2" className="nav nav-tabs nav-justified buyTabsUl">
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
                    <span id="jobsTitleUnemployed" className="titleSpan"></span>
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
                      <span id="infoSpanIce" className="infoSpanNature"></span>
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
  );
}
