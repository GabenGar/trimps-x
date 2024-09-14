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
    secondArg: null,
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

  function getMaxResources(name: "Food" | "Wood"): void;
  function setGather(name: "food" | "wood"): void;
  function getPsString(name: "food" | "wood"): void;
}

type ITooltipThirdArg = "update" | MouseEvent;

export const defineGlobals = undefined;
