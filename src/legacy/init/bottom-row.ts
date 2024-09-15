import { ensureIDSelector } from "#browser/dom";

export function initBottomRow() {
  initBuyColumn();
}

function initBuyColumn() {
  {
    const autoTrapBtn = ensureIDSelector<HTMLDivElement>("autoTrapBtn");

    autoTrapBtn.onclick = () => toggleAutoTrap();
  }

  {
    const buildingsCollectBtn = ensureIDSelector<HTMLDivElement>(
      "buildingsCollectBtn",
    );

    buildingsCollectBtn.onclick = () => setGather("buildings");
  }

  initBuyTabs();
  initNumTabs();
  initBuyContainer()
}

function initBuyTabs() {
  {
    const allTab = ensureIDSelector<HTMLLIElement>("allTab");

    allTab.onclick = () => filterTabs("all");
  }

  {
    const buildingsTab = ensureIDSelector<HTMLLIElement>("buildingsTab");

    buildingsTab.onclick = () => filterTabs("buildings");
  }

  {
    const jobsTab = ensureIDSelector<HTMLLIElement>("jobsTab");

    jobsTab.onclick = () => filterTabs("jobs");
  }

  {
    const upgradesTab = ensureIDSelector<HTMLLIElement>("upgradesTab");

    upgradesTab.onclick = () => filterTabs("upgrades");
  }

  {
    const equipmentTab = ensureIDSelector<HTMLLIElement>("equipmentTab");

    equipmentTab.onclick = () => filterTabs("equipment");
  }
}

function initNumTabs() {
  {
    const tab1 = ensureIDSelector<HTMLLIElement>("tab1");

    tab1.onclick = () => numTab(1);
  }

  {
    const tab2 = ensureIDSelector<HTMLLIElement>("tab2");

    tab2.onclick = () => numTab(2);
  }

  {
    const tab3 = ensureIDSelector<HTMLLIElement>("tab3");

    tab3.onclick = () => numTab(3);
  }

  {
    const tab4 = ensureIDSelector<HTMLLIElement>("tab4");

    tab4.onclick = () => numTab(4);
  }

  {
    const tab5Text = ensureIDSelector<HTMLAnchorElement>("tab5Text");

    tab5Text.onclick = () => numTab(5);
  }

  {
    const tab5Text2 = ensureIDSelector<HTMLAnchorElement>("tab5Text2");

    tab5Text2.onclick = () => tooltip("Custom", null, "update");
  }

  {
    const tab6 = ensureIDSelector<HTMLLIElement>("tab6");

    tab6.onclick = () => numTab(6);
    tab6.onmouseover = (event) =>
      tooltip(
        "Buy Max",
        "customText",
        event,
        "Switching to this option will spend the majority of your resources with each purchase. <b>Click twice to customize.</b>",
      );
    tab6.onmouseout = () => tooltip("hide");
  }
}

function initBuyContainer() {}

function initRightColumn() {}
