import styles from "./miscelaneous.module.scss";

export function Miscelaneous() {
  return (
    <div id="miscColumn" className={styles.block}>
      <div
        id="fragments"
        className="playerGather playerGatherSm"
        style={{ visibility: "hidden" }}
      >
        <span className="title">Fragments</span>
        <br />
        <span className="ownedArea">
          <span id="fragmentsOwned">0</span>
        </span>
        <br />
        <span
          className="psText sizeSecRegular pointer noselect"
          id="fragmentsPs"
          style={{ display: "none" }}
        >
          +0/sec
        </span>
      </div>

      <div
        id="gems"
        className="playerGather playerGatherSm"
        style={{ visibility: "hidden" }}
      >
        <span className="title">Gems</span>
        <br />
        <span className="ownedArea">
          <span id="gemsOwned">0</span>
        </span>
        <br />
        <span
          className="psText sizeSecRegular pointer noselect"
          id="gemsPs"
          style={{ display: "none" }}
        >
          +0/sec
        </span>
      </div>

      <div
        id="helium"
        className="playerGather playerGatherSm"
        style={{ display: "none" }}
      >
        <span id="heliumName" className="title">
          Helium
        </span>
        <br />
        <span className="ownedArea">
          <span id="heliumOwned">0</span>
        </span>
        <br />
        <span id="heliumPh" className="heliumPh hePhColorNormal"></span>
      </div>
    </div>
  );
}
