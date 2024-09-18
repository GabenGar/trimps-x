import { ensureIDSelector } from "#browser/dom";

export function initSettingsRow() {
  initSettingsTable();
  initSettingsWindow();
}

function initSettingsTable() {
  {
    const settingTableSave =
      ensureIDSelector<HTMLElementTagNameMap["td"]>("settingTableSave");

    settingTableSave.onclick = () => save(false, true);
  }

  {
    const settingTableExport =
      ensureIDSelector<HTMLElementTagNameMap["td"]>("settingTableExport");

    settingTableExport.onclick = () => tooltip("Export", null, "update");
  }

  {
    const settingTableImport =
      ensureIDSelector<HTMLElementTagNameMap["td"]>("settingTableImport");

    settingTableImport.onclick = () => tooltip("Import", null, "update");
  }

  {
    const settingTableStats =
      ensureIDSelector<HTMLElementTagNameMap["td"]>("settingTableStats");

    settingTableStats.onclick = () => toggleStats();
  }

  {
    const settingTableAchievments = ensureIDSelector<
      HTMLElementTagNameMap["td"]
    >("settingTableAchievments");

    settingTableAchievments.onclick = () => toggleAchievementWindow();
  }

  {
    const settingTableSettings = ensureIDSelector<HTMLElementTagNameMap["td"]>(
      "settingTableSettings",
    );

    settingTableSettings.onclick = () => toggleSettingsMenu();
  }

  {
    const pastUpgradesBtn =
      ensureIDSelector<HTMLElementTagNameMap["td"]>("pastUpgradesBtn");

    pastUpgradesBtn.onclick = () => viewPortalUpgrades();
  }

  {
    const portalTimer =
      ensureIDSelector<HTMLElementTagNameMap["td"]>("portalTimer");

    portalTimer.onclick = () => toggleSetting("pauseGame");
    portalTimer.onmouseover = () =>
      tooltip(
        "Pause the game",
        "customText",
        event,
        game.options.menu["pauseGame"].description,
      );
    portalTimer.onmouseout = () => tooltip("hide");
  }
}

function initSettingsWindow() {}
