import { initAchievements } from "./achievements";
import { initBoneZone } from "./bone-zone";
import { initBottomRow } from "./bottom-row";
import {
  initOfflineExtraButtons,
  initOfflineMapButtons,
  initOfflineZoneButton,
} from "./offline";
import { initPortal } from "./portal";
import { initSettingsRow } from "./settings-row";
import { initTopRow } from "./top-row";

/**
 * A helper module to initialize callbacks off html file.
 */
export function init() {
  const body = document.body;
  body.onblur = () => gameUnfocused();

  initOfflineMapButtons();
  initOfflineZoneButton();
  initOfflineExtraButtons();
  initBoneZone();
  initTopRow();
  initBottomRow();
  initSettingsRow();
  initPortal();
  initAchievements();
}
