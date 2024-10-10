export function Settings() {
  return (
    <div id="settingsRow">
      <table id="settingsTable">
        <tbody>
          <tr>
            <td id="settingTableSave" className="btn btn-info">
              Save <span id="saveIndicator"></span>
              <span id="playFabIndicator"></span>
            </td>
            <td id="settingTableExport" className="btn btn-info">
              <div>Export</div>
            </td>
            <td id="settingTableImport" className="btn btn-info">
              <div>Import</div>
            </td>
            <td id="settingTableStats" className="btn btn-success">
              <div>Stats</div>
            </td>
            <td id="settingTableAchievments" className="btn tealColor">
              <div>Achieves</div>
            </td>
            <td id="settingTableSettings" className="btn btn-default">
              <div id="settingsText">Settings</div>
            </td>
            <td id="pastUpgradesBtn" className="btn"></td>
            <td id="newUpdatesBtn" className="btn btn-new">
              V <span id="versionNumber"></span> | What&apos;s New
            </td>
            <td id="portalTimer" className="timerNotPaused">
              <span id="portalTime">&nbsp;</span>&nbsp;&nbsp;
              <span
                style={{ fontSize: "0.85em", lineHeight: "0.85em" }}
                className="icomoon icon-pause3"
              ></span>
              &nbsp;
            </td>
          </tr>
        </tbody>
      </table>

      <div id="settingsHere" style={{ display: "none" }}>
        <div id="searchSettingsWindow">
          <div id="settingTitleBar">
            <div className="noselect optionContainer settingsBtn tealColor settingTypeBtn">
              Browse All
            </div>
            <span id="searchSettingsTitle">
              Choose a Category Below, or Search for a Setting/Keyword:
            </span>
            &nbsp; <input id="searchSettings" />
            <br />
            <div id="settingsTabs">
              <ul className="nav nav-tabs nav-justified">
                <li
                  id="NewTab"
                  className="tabNotSelected settingTab"
                  role="presentation"
                  style={{ display: "none" }}
                >
                  <a>New</a>
                </li>

                <li
                  id="GeneralTab"
                  className="tabNotSelected settingTab"
                  role="presentation"
                >
                  <a>General</a>
                </li>

                <li
                  id="PerformanceTab"
                  className="tabNotSelected settingTab"
                  role="presentation"
                >
                  <a>Performance</a>
                </li>

                <li
                  id="QOLTab"
                  className="tabNotSelected settingTab"
                  role="presentation"
                >
                  <a>Quality of Life</a>
                </li>

                <li
                  id="AlertsTab"
                  className="tabNotSelected settingTab"
                  role="presentation"
                >
                  <a>Pop-ups and Alerts</a>
                </li>

                <li
                  id="LayoutTab"
                  className="tabNotSelected settingTab"
                  role="presentation"
                >
                  <a>Layout</a>
                </li>

                <li
                  id="OtherTab"
                  className="tabNotSelected settingTab"
                  role="presentation"
                >
                  <a>Other</a>
                </li>

                <li
                  id="HotkeyTab"
                  className="tabNotSelected settingTab"
                  role="presentation"
                >
                  <a>Hotkeys</a>
                </li>
              </ul>
            </div>
          </div>
          <div id="settingSearchResults"></div>
        </div>

        <div id="allSettings" style={{ display: "none" }}>
          <div className="noselect optionContainer settingsBtn tealColor">
            Back to Search
          </div>

          <div id="allSettingsHere"></div>
        </div>
      </div>
    </div>
  );
}
