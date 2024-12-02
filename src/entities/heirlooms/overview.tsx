import clsx from "clsx";
import { Button } from "#components/buttons";

import styles from "./overview.module.scss";

export function HeirloomsOverview() {
  return (
    <div id="heirloomWrapper" style={{ display: "none" }}>
      <div id="heirloomTitleBar" className="row">
        <div>Heirlooms - Gifts to past you from future you</div>

        <div id="nullifiumContainer">
          You have <span id="nullifiumCount"></span> Nullifium
          <span id="heirloomSpirestoneCount"></span>
        </div>

        <div className={styles.buttons}>
          <Button
            className={clsx("colorInfo", "heirBtn", styles.button)}
            onClick={() => {
              lastMainHeirIndex = -1;
              toggleHeirloomChances();
            }}
          >
            Chances
          </Button>

          <Button
            className={clsx("colorPrimary", "heirBtn", styles.button)}
            onClick={() => toggleHeirloomHelp()}
          >
            Help
          </Button>

          <Button
            className={clsx("colorDanger", "heirBtn", styles.button)}
            onClick={() => toggleHeirlooms()}
          >
            Close
          </Button>
        </div>
      </div>

      <div id="heirloomHelp" style={{ display: "none" }}>
        Heirlooms are powerful items that can drop with a variety of bonuses and
        a variety of rarities. You will earn one Heirloom every time a Void Map
        is completed, and you have a better chance to get higher rarities if you
        complete the Void Map at higher zones.
        <br />
        <br />
        You can click on the icon of any Heirloom to select it. Once you&apos;ve
        selected an Heirloom, you can Equip, Carry, or Recycle it. Only equipped
        Heirlooms give you stats, and you can only have one of each type of
        Heirloom equipped at a time. You can click a stat to upgrade or replace
        it. You can also click on the Heirloom&apos;s name on this menu to
        rename it, or click on the icon to change it.
        <br />
        <br />
        The currency to upgrade and replace stats,
        <b style={{ color: "rgb(75, 41, 197)" }}>Nullifium, or Nu</b>, can only
        be gathered by recycling an Heirloom.
        <b style={{ color: "red" }}>
          You can upgrade any Staff and Shield to the value of your total earned
          Nu. Nu is not spent, but dictates how powerful each of your Heirlooms
          can be!
        </b>
        <br />
        <br />
        Your Equipped Heirlooms will always stay with you when you Portal, along
        with any Heirlooms in your &quot;Carried&quot; slots.
        <b style={{ color: "red" }}>
          Any Heirlooms in the &quot;Temporary&quot; section will be recycled
          for Nullifium on portal.
        </b>
      </div>

      <div
        id="heirloomDropChances"
        style={{ display: "none" }}
        className="noselect"
      >
        <div className="heirloomChanceBtnContainer">
          <span
            id="heirloomChanceLeft"
            className="icomoon icon-arrow-left"
          ></span>
        </div>
        <div id="heirloomRarityMain"></div>
        <div className="heirloomChanceBtnContainer">
          <span
            id="heirloomChanceRight"
            className="icomoon icon-arrow-right"
          ></span>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-6">
          <div id="equippedHeirlooms">
            <div className="row">
              <div
                id="ShieldEquippedContainer"
                className="col-xs-6 heirloomEquippedContainer"
              >
                Equipped Shield
                <br />
                <div id="ShieldEquipped"></div>
                <br />
                <span id="ShieldEquippedName"></span>
              </div>

              <div
                id="CoreEquippedContainer"
                className="col-xs-4 heirloomEquippedContainer"
                style={{ display: "none" }}
              >
                Equipped Core
                <br />
                <div id="CoreEquipped"></div>
                <br />
                <span id="CoreEquippedName"></span>
              </div>

              <div
                id="StaffEquippedContainer"
                className="col-xs-6 heirloomEquippedContainer"
              >
                Equipped Staff
                <br />
                <div id="StaffEquipped"></div>
                <br />
                <span id="StaffEquippedName"></span>
              </div>
            </div>

            <div
              id="equippedHeirloomsBtnGroup"
              className="heirloomBtnGroup"
              style={{ visibility: "hidden" }}
            >
              <div
                id="unequipHeirloomBtn"
                className="noselect heirloomBtnActive heirBtn"
              >
                Unequip
              </div>

              <div
                id="heirloomPortalBtn"
                className="noselect heirloomBtnActive heirBtn"
              >
                Equip on Portal
              </div>
            </div>
          </div>

          <div id="carriedHeirlooms">
            Carried <span id="carriedHeirloomsText"></span>
            <div id="carriedHeirloomsHere"></div>
            <div
              id="carriedHeirloomsBtnGroup"
              className="heirloomBtnGroup"
              style={{ visibility: "hidden" }}
            >
              <div
                id="equipHeirloomBtn"
                className="noselect heirloomBtnActive heirBtn"
              >
                Equip
              </div>

              <div
                id="stopCarryHeirloomBtn"
                className="noselect heirloomBtnActive heirBtn"
              >
                Stop Carrying
              </div>
            </div>
          </div>

          <div id="extraHeirlooms">
            Temporary <span id="extraHeirloomsText"></span>
            <div
              id="recycleAllHeirloomsBtn"
              className="heirloomBtnActive heirBtn noselect"
            >
              Recycle All
            </div>
            &nbsp;
            <div
              id="sortHeirloomsBtn"
              className="heirloomBtnActive heirBtn noselect"
            >
              Sort
            </div>
            <div id="extraHeirloomsHere"></div>
            <div
              id="extraHeirloomsBtnGroup"
              className={clsx("heirloomBtnGroup", styles.heirlooms)}
              style={{ visibility: "hidden" }}
            >
              <div
                id="equipHeirloomBtn2"
                className="noselect heirloomBtnActive heirBtn"
              >
                Equip
              </div>

              <div
                id="carryHeirloomBtn"
                className="noselect heirloomBtnActive heirBtn"
              >
                Carry
              </div>

              <div
                id="recycleHeirloomBtn"
                className="noselect heirloomBtnActive heirBtn"
              >
                Recycle
              </div>
            </div>
          </div>
        </div>

        <div className="col-xs-6">
          <div id="selectedHeirloom"></div>
          <div id="modBreakdown" style={{ display: "none" }}>
            <div id="specialModDescription" style={{ display: "none" }}></div>
            <div className="row">
              <div className="col-xs-6" id="modReplaceBox">
                <div id="modCantReplace" style={{ display: "none" }}></div>
                <select id="modReplaceSelect"></select>
                <br />
                <div
                  id="modReplaceBtn"
                  className="heirloomBtnActive heirBtn noselect"
                >
                  Replace
                </div>
              </div>

              <div className="col-xs-6" id="modUpgradeBox">
                <div id="modUpgradeCost"></div>

                <div
                  id="modUpgradeBtn"
                  className="heirloomBtnActive heirBtn noselect modUpgradeBtn"
                >
                  x1
                  <br />
                  &nbsp;
                </div>

                <div
                  id="modUpgradeBtn10"
                  className="heirloomBtnActive heirBtn noselect modUpgradeBtn"
                >
                  x10
                  <br />
                  &nbsp;
                </div>

                <div
                  id="modUpgradeBtn100"
                  className="heirloomBtnActive heirBtn noselect modUpgradeBtn"
                >
                  x100
                  <br />
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
