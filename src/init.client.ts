/**
 * A helper module to initialize callbacks off html file.
 */

import { ensureIDSelector, ensureOneSelector } from "#browser/dom";

export function init() {
  const body = document.body;
  body.onblur = () => gameUnfocused();

  initOfflineMapButtons();
  initOfflineZoneButton();
  initOfflineExtraButtons();
  initBoneZone();
}

function initOfflineMapButtons() {
  const offlineMapBtnsInner = ensureOneSelector<HTMLDivElement>(
    "#offlineMapBtnsInner",
  );

  const offlineMapBtn0 = ensureOneSelector<HTMLSpanElement>(
    "#offlineMapBtn0",
    offlineMapBtnsInner,
  );
  const offlineMapBtn1 = ensureOneSelector<HTMLSpanElement>(
    "#offlineMapBtn1",
    offlineMapBtnsInner,
  );
  const offlineMapBtn2 = ensureOneSelector<HTMLSpanElement>(
    "#offlineMapBtn2",
    offlineMapBtnsInner,
  );
  const offlineMapBtn3 = ensureOneSelector<HTMLSpanElement>(
    "#offlineMapBtn3",
    offlineMapBtnsInner,
  );

  offlineMapBtn0.onclick = () => offlineProgress.runFirstMap(0);
  offlineMapBtn1.onclick = () => offlineProgress.runFirstMap(-1);
  offlineMapBtn2.onclick = () => offlineProgress.runFirstMap(-2);
  offlineMapBtn3.onclick = () => offlineProgress.runFirstMap(-3);
}

function initOfflineZoneButton() {
  const offlineZoneBtn = ensureOneSelector<HTMLSpanElement>("#offlineZoneBtn");

  offlineZoneBtn.onclick = () => offlineProgress.leaveMap();
}

function initOfflineExtraButtons() {
  const offlineExtraBtnsContainer = ensureOneSelector<HTMLDivElement>(
    "#offlineExtraBtnsContainer",
  );

  const buttonInfo = ensureOneSelector<HTMLDivElement>(
    ".btn-info",
    offlineExtraBtnsContainer,
  );
  const buttonDanger = ensureOneSelector<HTMLDivElement>(
    ".btn-danger",
    offlineExtraBtnsContainer,
  );
  const offlineEqualityBtn = ensureOneSelector<HTMLDivElement>(
    "#offlineEqualityBtn",
  );
  const offlineFightBtn = ensureOneSelector<HTMLDivElement>("#offlineFightBtn");

  buttonInfo.onclick = () => tooltip("Lost Time", null, "update");
  buttonDanger.onclick = () => offlineProgress.finish();
  offlineEqualityBtn.onclick = () => offlineProgress.showEquality();
  offlineFightBtn.onclick = () => offlineProgress.fightClicked();
}

function initBoneZone() {
  const boneWrapper0 = ensureIDSelector<HTMLDivElement>("boneWrapper0");
  {
    const hideBonesButton = ensureOneSelector<HTMLDivElement>(
      ".row > .col-xs-2 > .boneBtn.dangerColor.pointer.noselect",
      boneWrapper0,
    );

    hideBonesButton.onclick = () => hideBones();
  }

  {
    const importPurchaseBtn =
      ensureIDSelector<HTMLDivElement>("importPurchaseBtn");

    importPurchaseBtn.onclick = () =>
      tooltip(
        "Confirm Purchase",
        null,
        "update",
        "You are about to purchase a new Exotic Import for 50 bones. This new Bad Guy will begin spawning in your next Zone or Map at an average of 3 spawns per 100 enemies. Is this what you wanted to do?",
        "purchaseImport()",
        50,
      );
  }

  {
    const heliumPurchaseBtn =
      ensureIDSelector<HTMLDivElement>("heliumPurchaseBtn");

    heliumPurchaseBtn.onclick = () =>
      tooltip(
        "Confirm Purchase",
        null,
        "update",
        "You are about to purchase one Instant Portal for 100 bones. Your new Helium will appear in the View Perks menu at the bottom of the screen available for immediate spending, and your Respec will be refreshed. Is this what you wanted to do?",
        "purchaseMisc('helium')",
        100,
      );
  }

  {
    const heirloomPurchaseBtn = ensureIDSelector<HTMLDivElement>(
      "heirloomPurchaseBtn",
    );

    heirloomPurchaseBtn.onclick = () =>
      tooltip(
        "Confirm Purchase",
        null,
        "update",
        "You are about to purchase one Heirloom for 30 bones. This will be created at a random rarity, and will be just like completing a Void Map at your highest ever Zone reached. Are you sure?",
        "purchaseMisc('heirloom')",
        30,
      );
  }
}

declare global {
  function gameUnfocused(): void;

  const offlineProgress: {
    runFirstMap(index: number): void;
    leaveMap(): void;
    finish(): void;
    showEquality(): void;
    fightClicked(): void;
  };

  function tooltip(
    title: string,
    secondArg: null,
    thirdArg: ITooltipThirdArg,
    fourthArg?: string,
    fifthArg?: string,
    sixthArg?: number,
  ): void;

  function hideBones(): void;
}

type ITooltipThirdArg = "update";
