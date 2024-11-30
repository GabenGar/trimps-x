import clsx from "clsx";
import styles from "./portal.module.scss";

export function Portal() {
  return (
    <div id="portalWrapper" style={{ display: "none" }} className="portalMk0">
      <div id="swapPortalUniverseBtn">Change Universe</div>

      <div id="titleRow">
        <div id="titleCol1" className="titleCol">
          <div>
            <div id="portalTitle"></div>
            <div id="portalError" style={{ display: "none" }}></div>
          </div>
        </div>

        <div id="titleCol2" className="titleCol">
          <div>
            <div id="portalHelium">
              <span id="portalHeliumOwned">0</span> Helium Canisters
            </div>

            <div id="portalTotalHelium">
              <span id="totalHeliumEarned">0</span> Earned All Time
            </div>

            <div id="portalTotalSpent">
              <span id="totalHeliumSpent">0</span> Spent on Perks
            </div>

            <div id="portalTotalPortals">
              <span id="totalPortals">0</span> Portals Used
            </div>
          </div>
        </div>
      </div>

      <div className="row" id="portalRow">
        <div id="perkCol" className="col-xs-7">
          <div className="challengeTitle">Perks</div>
          <div id="portalStory"></div>
          <div id="portalPresets" className="numTabs">
            <ul className="nav nav-tabs nav-justified" id="portalPresetsTabs">
              <li
                id="presetTab1"
                className="tabNotSelected"
                role="presentation"
              >
                <a id="presetTab1Text">Preset 1</a>
              </li>

              <li
                id="presetTab2"
                className="tabNotSelected"
                role="presentation"
              >
                <a id="presetTab2Text">Preset 2</a>
              </li>

              <li
                id="presetTab3"
                className="tabNotSelected"
                role="presentation"
              >
                <a id="presetTab3Text">Preset 3</a>
              </li>

              <li
                id="presetTabSave"
                className="tabNotEnabled"
                role="presentation"
              >
                <a>Save</a>
              </li>

              <li
                id="presetTabLoad"
                className="tabNotEnabled"
                role="presentation"
              >
                <a>Load</a>
              </li>

              <li
                id="presetTabRename"
                className="tabNotEnabled"
                role="presentation"
              >
                <a>Rename</a>
              </li>

              <li
                id="presetTabExport"
                className="tabNotEnabled"
                role="presentation"
              >
                <a>Export</a>
              </li>

              <li
                id="presetTabImport"
                className="tabNotEnabled"
                role="presentation"
              >
                <a>Import</a>
              </li>
            </ul>
          </div>

          <div id="pnumTabs" className="numTabs">
            <ul className="nav nav-tabs nav-justified" id="portalTabs">
              <li id="ptab1" className="tabNotSelected" role="presentation">
                <a id="ptab1Text">+1</a>
              </li>

              <li id="ptab2" className="tabNotSelected" role="presentation">
                <a id="ptab2Text">+10</a>
              </li>

              <li id="ptab3" className="tabNotSelected" role="presentation">
                <a id="ptab3Text">+25</a>
              </li>

              <li id="ptab4" className="tabNotSelected" role="presentation">
                <a id="ptab4Text">+100</a>
              </li>

              <li id="ptab5" className="tabNotSelected" role="presentation">
                <a id="ptab5Text">Custom</a>
              </li>

              <li id="ptab6" className="tabNotSelected" role="presentation">
                <a id="ptab6Text">Max</a>
              </li>

              <li
                id="ptabInfo"
                className="tabNotSelected pointer"
                role="presentation"
              >
                <a id="ptabInfoText">More Info</a>
              </li>

              <li
                id="ptabRemove"
                role="presentation"
                style={{ display: "none" }}
              >
                <a id="ptabRemoveText">Remove</a>
              </li>
            </ul>
          </div>

          <div id="portalUpgradesHere" className="niceScroll"></div>
        </div>

        <div id="challengeCol" className="col-xs-5">
          <div id="viewChallenge" style={{ display: "none" }}>
            <div style={{ textAlign: "center" }}>
              <span
                id="challengeSquaredViewBtn"
                className="thing thingColorSquared pointer"
                style={{ width: "50%", display: "inline-block" }}
              >
                Challenge
                <sup>
                  <span id="challengeSquaredName">2</span>
                </sup>{" "}
                -<span id="challengeSquaredBonusAmtView">0</span>% bonus
              </span>
            </div>
            <span id="viewChallengeText">
              You do not currently have an active challenge.
            </span>
            <br />
            <br />
            <div
              id="cancelChallengeBtn"
              className="btn btn-warning inPortalBtn"
              style={{ display: "none" }}
            >
              Abandon Challenge
            </div>
            <span id="extraChallengeStuff"></span>
          </div>

          <div id="challenges" style={{ display: "none" }}>
            <div id="challengeTitleNoSquared">
              <div className="challengeTitle">Challenges</div>
            </div>

            <div id="challengeTitleSquared" style={{ display: "none" }}>
              <div
                className="challengeTitle"
                style={{
                  display: "inline-block",
                  width: "50%",
                  padding: "0",
                  margin: "0",
                }}
              >
                Challenges
              </div>

              <div
                style={{
                  display: "inline-block",
                  width: "50%",
                  padding: "0",
                  margin: "0",
                }}
              >
                <span
                  id="inPortalC2Button"
                  className={clsx(
                    "thing",
                    "thingColorSquared",
                    "pointer",
                    styles.c2button,
                  )}
                >
                  Challenge
                  <sup>
                    <span id="inPortalC2Name">2</span>
                  </sup>{" "}
                  - <span id="challengeSquaredBonusAmt">0</span>% bonus
                </span>
              </div>
            </div>

            <div id="challengeDescription">
              <span id="challengeDescriptionPre">
                You can also choose to activate a challenge before using your
                portal. Completing a challenge will earn you a permanent reward.
                You can abandon or view an active challenge at any time by
                clicking the &quot;View Perks&quot; button.
              </span>
              <span id="flagMustRestart" style={{ display: "none" }}>
                <b>
                  If you abandon this challenge, the portal will become unstable
                  and the world will restart (you&apos;ll keep permanent bonuses
                  like helium)
                </b>
              </span>

              <div
                id="specificChallengeDescription"
                className="challengeDescriptionLg"
              ></div>
            </div>

            <div id="challengesHere"></div>
          </div>
        </div>
      </div>

      <div id="portalBtnContainer" className={styles.buttons}>
        <div id="activatePortalBtn" className="btn btn-primary inPortalBtn">
          Activate Portal
        </div>

        <div id="cancelPortalBtn" className="btn btn-danger inPortalBtn">
          Cancel
        </div>

        <div
          id="respecPortalBtn"
          className="btn btn-warning inPortalBtn"
          style={{ display: "none" }}
        ></div>

        <div
          id="swapToCurrentChallengeBtn"
          className="btn btn-success inPortalBtn"
          style={{ display: "none" }}
        >
          View Current Challenge
        </div>

        <div
          id="clearPerksBtn"
          className="btn btn-warning inPortalBtn"
          style={{ display: "none" }}
        >
          Clear All Perks
        </div>

        <div
          id="respecMutatorsBtn"
          className="btn inPortalBtn autoColor darkBorder"
          style={{ display: "none" }}
        ></div>
      </div>
    </div>
  );
}
