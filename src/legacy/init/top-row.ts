import { ensureIDSelector, ensureOneSelector } from "#browser/dom";

export function initTopRow() {
  initResourceColumn();
  initMiscColumn();
}

function initResourceColumn() {
  initBoneShrine();
  initFood();
  initWood();
  initMetal();
  initScience();
}

function initFood() {
  const food = ensureIDSelector<HTMLDivElement>("food");

  {
    const ownedArea = ensureOneSelector<HTMLSpanElement>(
      ".ownedArea.bdHover",
      food,
    );

    ownedArea.onclick = () => getMaxResources("Food");
  }

  {
    const foodCollectBtn = ensureIDSelector<HTMLDivElement>("foodCollectBtn");

    foodCollectBtn.onclick = () => setGather("food");
  }

  {
    const foodPs = ensureIDSelector<HTMLSpanElement>("foodPs");

    foodPs.onclick = () => getPsString("food");
  }
}

function initBoneShrine() {
  const boneShrineBtn = ensureIDSelector<HTMLDivElement>("boneShrineBtn");

  boneShrineBtn.onmouseover = (event) => tooltip("Bone Shrine", null, event);
  boneShrineBtn.onclick = () => game.permaBoneBonuses.boosts.consume();
  boneShrineBtn.onmouseout = () => tooltip("hide");
}

function initWood() {
  const wood = ensureIDSelector("wood");

  {
    const ownedArea = ensureOneSelector<HTMLSpanElement>(
      ".ownedArea.bdHover",
      wood,
    );
    ownedArea.onclick = () => getMaxResources("Wood");
  }

  {
    const woodCollectBtn = ensureIDSelector<HTMLDivElement>("woodCollectBtn");

    woodCollectBtn.onclick = () => setGather("wood");
  }

  {
    const woodPs = ensureIDSelector<HTMLSpanElement>("woodPs");

    woodPs.onclick = () => getPsString("wood");
  }
}

function initMetal() {
  const metal = ensureIDSelector("metal");

  {
    const ownedArea = ensureOneSelector<HTMLSpanElement>(
      ".ownedArea.bdHover",
      metal,
    );

    ownedArea.onclick = () => getMaxResources("Metal");
  }

  {
    const metalCollectBtn = ensureIDSelector<HTMLDivElement>("metalCollectBtn");

    metalCollectBtn.onclick = () => setGather("metal");
  }

  {
    const metalPs = ensureIDSelector<HTMLSpanElement>("metalPs");

    metalPs.onclick = () => getPsString("metal");
  }
}

function initScience() {
  {
    const scienceCollectBtn =
      ensureIDSelector<HTMLDivElement>("scienceCollectBtn");

    scienceCollectBtn.onclick = () => setGather("science");
  }

  {
    const sciencePs = ensureIDSelector<HTMLDivElement>("sciencePs");

    sciencePs.onclick = () => getPsString("science");
  }
}

function initMiscColumn() {
  {
    const fragmentsPs = ensureIDSelector<HTMLSpanElement>("fragmentsPs");

    fragmentsPs.onclick = () => getPsString("fragments");
  }

  {
    const gemsPs = ensureIDSelector<HTMLSpanElement>("gemsPs");

    gemsPs.onclick = () => getPsString("gems");
  }

  {
    const heliumPh = ensureIDSelector<HTMLSpanElement>("heliumPh");

    heliumPh.onmouseover = (event) => tooltip("Helium Per Hour", null, event);
    heliumPh.onmouseout = () => tooltip("hide");
  }
}
