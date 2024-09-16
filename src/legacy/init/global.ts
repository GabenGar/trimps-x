declare global {
  function gameUnfocused(): void;

  const offlineProgress: {
    runFirstMap(index: number): void;
    leaveMap(): void;
    finish(): void;
    showEquality(): void;
    fightClicked(): void;
  };

  function tooltip(title: "hide"): void;
  function tooltip(
    title: string,
    secondArg: null | "customText",
    thirdArg: ITooltipThirdArg,
    fourthArg?: string,
    fifthArg?: string,
    sixthArg?: number,
  ): void;

  function hideBones(): void;

  const game: {
    permaBoneBonuses: {
      boosts: {
        consume(): void;
      };
    };
  };

  function getMaxResources(name: "Food" | "Wood" | "Metal"): void;
  function setGather(
    name: "food" | "wood" | "metal" | "science" | "trimps" | "buildings",
  ): void;
  function getPsString(
    name: "food" | "wood" | "metal" | "science" | "fragments" | "gems",
  ): void;

  function getMaxTrimps(): void;

  function getTrimpPs(): void;

  function filterMessage(
    messageType: "Story" | "Loot" | "Unlocks" | "Combat",
  ): void;

  function startTrackAchieve(): void;

  function toggleAutoTrap(): void;

  function filterTabs(
    tabName: "all" | "buildings" | "jobs" | "upgrades" | "equipment",
  ): void;

  function numTab(tab: 1 | 2 | 3 | 4 | 5 | 6): void;

  function toggleAutoStructure(): void;

  function toggleAutoStorage(): void;

  function toggleAutoJobs(): void;

  function fireMode(): void;

  function toggleAutoPrestiges(): void;

  function toggleAutoUpgrades(): void;

  function toggleAutoEquip(): void;

  const u2Mutations: {
    swapTab(bool: boolean): void;
  };

  function respecTalents(): void;

  function preventZoom(handler: GlobalEventHandlers): void;

  function natureTooltip(
    event: MouseEvent,
    type:
      | "description"
      | "upgrade"
      | "stackTransfer"
      | "uberEmpower"
      | "convert",
    elementName: "Poison" | "Wind" | "Ice",
    fourthArg?: "Wind" | "Ice" | "Poison",
  ): void;

  function naturePurchase(
    type: "upgrade" | "stackTransfer" | "uberEmpower" | "convert",
    element: "Poison" | "Wind" | "Ice",
    anotherElement?: "Wind" | "Ice" | "Poison",
  ): void;
}

type ITooltipThirdArg = "update" | MouseEvent;

export const defineGlobals = undefined;
