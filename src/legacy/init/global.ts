// declare global {
//   function gameUnfocused(): void;

//   const offlineProgress: {
//     runFirstMap(index: number): void;
//     leaveMap(): void;
//     finish(): void;
//     showEquality(): void;
//     fightClicked(): void;
//   };

//   function tooltip(what: "hide"): void;
//   function tooltip(
//     what: ITooltipWhatArg,
//     isItIn: null | "customText" | "advMaps",
//     event: ITooltipEvent,
//     textString?: string | 1 | 2 | 3 | true,
//     attachFunction?: IAttachFunctionArg,
//     numCheck?: number,
//     renameBtn?: unknown,
//     noHide?: unknown,
//     hideCancel?: unknown,
//     ignoreShift?: unknown,
//   ): void;

//   function hideBones(): void;

//   const game: {
//     permaBoneBonuses: {
//       boosts: {
//         consume(): void;
//       };
//     };
//     options: {
//       menu: {
//         pauseGame: {
//           description: string;
//         };
//       };
//     };
//   };

//   function getMaxResources(name: "Food" | "Wood" | "Metal"): void;
//   function setGather(
//     name: "food" | "wood" | "metal" | "science" | "trimps" | "buildings",
//   ): void;
//   function getPsString(
//     name: "food" | "wood" | "metal" | "science" | "fragments" | "gems",
//   ): void;

//   function getMaxTrimps(): void;

//   function getTrimpPs(): void;

//   function filterMessage(
//     messageType: "Story" | "Loot" | "Unlocks" | "Combat",
//   ): void;

//   function startTrackAchieve(): void;

//   function toggleAutoTrap(): void;

//   function filterTabs(
//     tabName:
//       | "all"
//       | "buildings"
//       | "jobs"
//       | "upgrades"
//       | "equipment"
//       | "talents"
//       | "nature",
//   ): void;

//   function numTab(tab: 1 | 2 | 3 | 4 | 5 | 6, secondArg?: true): void;

//   function toggleAutoStructure(): void;

//   function toggleAutoStorage(): void;

//   function toggleAutoJobs(): void;

//   function fireMode(): void;

//   function toggleAutoPrestiges(): void;

//   function toggleAutoUpgrades(): void;

//   function toggleAutoEquip(): void;

//   const u2Mutations: {
//     swapTab(bool: boolean): void;
//     toggleRespec(): void;
//   };

//   function respecTalents(): void;

//   function preventZoom(handler: GlobalEventHandlers): void;

//   function natureTooltip(
//     event: MouseEvent,
//     type:
//       | "description"
//       | "upgrade"
//       | "stackTransfer"
//       | "uberEmpower"
//       | "convert"
//       | "formation",
//     elementName?: "Poison" | "Wind" | "Ice",
//     fourthArg?: "Wind" | "Ice" | "Poison",
//   ): void;

//   function naturePurchase(
//     type: "upgrade" | "stackTransfer" | "uberEmpower" | "convert",
//     element: "Poison" | "Wind" | "Ice",
//     anotherElement?: "Wind" | "Ice" | "Poison",
//   ): void;

//   function setFormation(value: "0" | "1" | "2" | "3" | "4" | "5"): void;

//   function getBattleStatBd(stat: "attack" | "block" | "health"): void;

//   function magnetoShriek(): void;

//   function getLootBd(type: "Food/Wood/Metal"): void;

//   const tutorial: {
//     popup(): void;
//     toggleSize(): void;
//     closeWindow(): void;
//     back(): void;
//     next(): void;
//   };

//   function getZoneStats(event: MouseEvent, update?: boolean): void;

//   function fightManual(): void;

//   function pauseFight(): void;

//   function mapsClicked(): void;

//   function toggleVoidMaps(): void;

//   function portalClicked(): void;

//   function repeatClicked(): void;

//   function toggleHeirlooms(): void;

//   function showBones(): void;

//   function hideAdvMaps(): void;

//   function selectAdvMapsPreset(preset: 1 | 2 | 3 | 4 | 5): void;

//   function saveAdvMaps(): void;

//   function resetAdvMaps(val: true): void;

//   function recycleBelow(val: false): void;

//   function incrementMapLevel(val: -1 | 1): void;

//   function updateMapCost(): void;

//   function buyMap(): void;

//   function updateMapNumbers(): void;

//   function swapNiceCheckbox(target: GlobalEventHandlers): void;

//   function runMap(): void;

//   function recycleMap(): void;

//   function restoreGrid(): void;

//   function toggleSetting(
//     name:
//       | "mapLoot"
//       | "exitTo"
//       | "mapAtZone"
//       | "repeatVoids"
//       | "climbBw"
//       | "detailedPerks"
//       | "repeatUntil",
//     secondArg?: null,
//     thirdArg?: true,
//   ): void;

//   function save(first: boolean, second: boolean): void;

//   function toggleStats(): void;
//   function toggleStats(stat: "total" | "current" | "custom"): void;

//   function toggleAchievementWindow(): void;

//   function toggleSettingsMenu(): void;

//   function viewPortalUpgrades(): void;

//   function toggleSetting(type: "pauseGame"): void;

//   function toggleSettingSection(arg: boolean): void;

//   function searchSettings(that: GlobalEventHandlers): void;

//   function settingTab(
//     name:
//       | "New"
//       | "General"
//       | "Performance"
//       | "QOL"
//       | "Alerts"
//       | "Layout"
//       | "Other",
//   ): void;

//   function swapPortalUniverse(): void;

//   function presetTab(firstArg: 1 | 2 | 3, secondArg: true): void;

//   function savePerkPreset(): void;

//   function loadPerkPreset(): void;

//   function renamePerkPreset(arg: boolean): void;

//   function toggleRemovePerks(): void;

//   function confirmAbandonChallenge(): void;

//   function toggleChallengeSquared(): void;

//   function activateClicked(): void;

//   function cancelTooltip(): void;
//   function cancelPortal(): void;

//   function respecPerks(): void;

//   function swapToCurrentChallenge(): void;

//   function clearPerks(): void;

//   function toggleAchievementHelp(): void;

//   let lastMainHeirIndex: number;

//   function toggleHeirloomChances(): void;

//   function toggleHeirloomHelp(): void;

//   function changeHeirloomRarityRange(offset: number): void;

//   function unequipHeirloom(): void;

//   function toggleHeirloomOnPortal(): void;

//   function equipHeirloom(): void;

//   function stopCarryHeirloom(): void;

//   function recycleAllHeirloomsClicked(): void;

//   function sortHeirlooms(): void;

//   function carryHeirloom(): void;

//   function recycleHeirloom(): void;

//   function replaceMod(): void;

//   function upgradeMod(): void;
//   function upgradeMod(firstArg: false, amount: 10 | 100): void;

//   function closeAchievementPopup(): void;

//   function closeHeirPopup(): void;

//   const playerSpire: { openPopup(): void };

//   const alchObj: {
//     openPopup(): void;
//   };

//   const autoBattle: {
//     popup(): void;
//   };

//   function toggleAutoGolden(): void;

//   const archoGolden: {
//     popup(): void;
//   };
// }

// type ITooltipEvent = "update" | MouseEvent;
// type ITooltipWhatArg =
//   | "The Improbability"
//   | "Corruption"
//   | "The Spire"
//   | "The Magma"
//   | "The Mutated Zones"
//   | "Stuffy's Spire"
//   | "Hub"
//   | "Special Modifier"
//   | "Confirm Purchase"
//   | "Trimps Info"
//   | "NW Trimps Info"
//   | "Mastery Info"
//   | "Fluffy"
//   | "Scryer Formation"
//   | "First Amalgamator"
//   | "Empowerments of Nature"
//   | "Helium Per Hour"
//   | "Finish Daily"
//   | "Switch Daily"
//   | "Decay"
//   | "Melt"
//   | "Heirloom"
//   | "Bone Shrine"
//   | "Respec"
//   | "Respec Mutators"
//   | "Well Fed"
//   | "Geneticistassist"
//   | "Welcome"
//   | "Trustworthy Trimps"
//   | "Unequip Heirloom"
//   | "Configure AutoStructure"
//   | "AutoStructure"
//   | "Configure AutoEquip"
//   | "AutoEquip"
//   | "Configure Generator State"
//   | "Rename SA Preset"
//   | "Configure AutoJobs"
//   | "Archaeology Automator"
//   | "AutoJobs"
//   | "AutoGold"
//   | "Unliving"
//   | "AutoGolden Unlocked"
//   | "Poisoned"
//   | "Chilled"
//   | "Breezy"
//   | "Perk Preset"
//   | "Rename Preset"
//   | "UnlockedChallenge2"
//   | "UnlockedChallenge3"
//   | "Eggs"
//   | "Portal"
//   | "Repeat Map"
//   | "Challenge2"
//   | "Geneticistassist Settings"
//   | "Configure Maps"
//   | "Set Map At Zone"
//   | "Change Heirloom Icon"
//   | "Change Portal Color"
//   | "Message Config"
//   | "Hotkeys"
//   | "Void"
//   | "Helium"
//   | "Radon"
//   | "Mastery"
//   | "The Improbability"
//   | "Corruption"
//   | "A Whole New World"
//   | "Change Universe"
//   | "The Spire"
//   | "Stuffy's Spire"
//   | "The Magma"
//   | "The Mutated Zones"
//   | "Exit Spire"
//   | "Confirm Respec Masteries"
//   | "Respec Masteries"
//   | "The Geneticistassist"
//   | "MagnetoShriek"
//   | "Reset"
//   | "Fight"
//   | "AutoFight"
//   | "New Achievements"
//   | "Upgrade Generator"
//   | "Queue"
//   | "Toxic"
//   | "Momentum"
//   | "Custom"
//   | "Max"
//   | "Export"
//   | "Lost Time"
//   | "Export Perks"
//   | "Import"
//   | "Import Perks"
//   | "AutoPrestige"
//   | "AutoUpgrade"
//   | "Recycle All"
//   | "PlayFab Login"
//   | "PlayFab Conflict"
//   | "DominationDominating"
//   | "DominationWeak"
//   | "Fire Trimps"
//   | "Maps"
//   | "Error"
//   | "Amalgamator"
//   | "Time Warp Limiter"
//   | "Scale Equality Scaling"
//   | "Equality Scaling"
//   | "Shield"
//   | "Coordination"
//   | "Configure Number Formats"
//   | "confirm"
//   | "Spire Settings"
//   | string;
// type IAttachFunctionArg = string;

// export const defineGlobals = undefined;
