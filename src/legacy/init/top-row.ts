import { ensureIDSelector, ensureOneSelector } from "#browser/dom";

export function initTopRow() {
  initResourceColumn();
}

function initResourceColumn() {
  {
    const boneShrineBtn = ensureIDSelector<HTMLDivElement>("boneShrineBtn");

    boneShrineBtn.onmouseover = (event) => tooltip("Bone Shrine", null, event);
    boneShrineBtn.onclick = () => game.permaBoneBonuses.boosts.consume();
    boneShrineBtn.onmouseout = () => tooltip("hide");
  }

  {
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

  {
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
}
