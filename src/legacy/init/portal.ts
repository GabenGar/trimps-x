import { ensureIDSelector } from "#browser/dom";

export function initPortal() {
  {
    const swapPortalUniverseBtn = ensureIDSelector<
      HTMLElementTagNameMap["div"]
    >("swapPortalUniverseBtn");

    swapPortalUniverseBtn.onmouseover = () =>
      tooltip("Change Universe", null, event);
    swapPortalUniverseBtn.onmouseout = () => tooltip("hide");
    swapPortalUniverseBtn.onclick = () => swapPortalUniverse();
  }

  {
    const presetTab1 =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("presetTab1");

    presetTab1.onclick = () => presetTab(1, true);
    presetTab1.onmouseover = () => tooltip("Perk Preset", null, event, 1);
    presetTab1.onmouseout = () => tooltip("hide");
  }

  {
    const presetTab2 =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("presetTab2");

    presetTab2.onclick = () => presetTab(2, true);
    presetTab2.onmouseover = () => tooltip("Perk Preset", null, event, 2);
    presetTab2.onmouseout = () => tooltip("hide");
  }

  {
    const presetTab3 =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("presetTab3");

    presetTab3.onclick = () => presetTab(3, true);
    presetTab3.onmouseover = () => tooltip("Perk Preset", null, event, 3);
    presetTab3.onmouseout = () => tooltip("hide");
  }

  {
    const presetTabSave =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("presetTabSave");

    presetTabSave.onclick = () => savePerkPreset();
    presetTabSave.onmouseover = () =>
      tooltip("Perk Preset", null, event, "Save");
    presetTabSave.onmouseout = () => tooltip("hide");
  }

  {
    const presetTabLoad =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("presetTabLoad");

    presetTabLoad.onclick = () => loadPerkPreset();
    presetTabLoad.onmouseover = () =>
      tooltip("Perk Preset", null, event, "Load");
    presetTabLoad.onmouseout = () => tooltip("hide");
  }

  {
    const presetTabRename =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("presetTabRename");

    presetTabRename.onclick = () => renamePerkPreset(true);
    presetTabRename.onmouseover = () =>
      tooltip("Perk Preset", null, event, "Rename");
    presetTabRename.onmouseout = () => tooltip("hide");
  }

  {
    const presetTabExport =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("presetTabExport");

    presetTabExport.onclick = () => tooltip("Export Perks", null, "update");
    presetTabExport.onmouseover = () =>
      tooltip("Perk Preset", null, event, "Export");
    presetTabExport.onmouseout = () => tooltip("hide");
  }

  {
    const presetTabImport =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("presetTabImport");

    presetTabImport.onclick = () => tooltip("Import Perks", null, "update");
    presetTabImport.onmouseover = () =>
      tooltip("Perk Preset", null, event, "Import");
    presetTabImport.onmouseout = () => tooltip("hide");
  }
}
