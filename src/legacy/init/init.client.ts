import { initBoneZone } from "./bone-zone";
import { initOfflineExtraButtons, initOfflineMapButtons, initOfflineZoneButton } from "./offline";
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
}
