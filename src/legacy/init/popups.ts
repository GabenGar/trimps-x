import { ensureOneSelector } from "#browser/dom";

export function initPopups() {
  {
    const achieveWindow = ensureOneSelector<HTMLElementTagNameMap["span"]>(
      `#achievementPopup > .achievementBtns > span:first`,
    );

    achieveWindow.onclick = () => toggleAchievementWindow();
  }

  {
    const achievePopup = ensureOneSelector<HTMLElementTagNameMap["span"]>(
      `#achievementPopup > .achievementBtns > span:last`,
    );

    achievePopup.onclick = () => closeAchievementPopup();
  }

  {
    const heirloomPopup = ensureOneSelector<HTMLElementTagNameMap["span"]>(
      `#heirloomsPopupBtns > span:first`,
    );

    heirloomPopup.onclick = () => closeHeirPopup();
  }

  {
    const heirloomPopupClose = ensureOneSelector<HTMLElementTagNameMap["span"]>(
      `#heirloomsPopupBtns > span:last`,
    );

    heirloomPopupClose.onclick = () => {
      toggleHeirlooms();
      closeHeirPopup();
    };
  }
}
