/**
 * A helper module to initialize callbacks off html file.
 */

export function init() {
  const body = document.body;
  body.onblur = () => gameUnfocused();

  initOfflineMapButtons();
  initOfflineZoneButton();
  initOfflineExtraButtons();
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

function ensureOneSelector<ReturnElement extends Element = Element>(
  selector: string,
  parentElement?: ParentNode,
) {
  const parentNode = parentElement ?? document;
  const results = parentNode.querySelectorAll<ReturnElement>(selector);

  if (results.length === 0) {
    throw new Error(`Failed to find element for selector "${selector}".`);
  }

  if (results.length !== 1) {
    throw new Error(
      `Expected to find one element for selector "${selector}", but got ${results.length}.`,
    );
  }

  const result = results[0];

  return result;
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
    title: ITooltipTitle,
    secondArg: null,
    thirdArg: ITooltipThirdArg,
  ): void;
}

type ITooltipTitle = "Lost Time";
type ITooltipThirdArg = "update";
