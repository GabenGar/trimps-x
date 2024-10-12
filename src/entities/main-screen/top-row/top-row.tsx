import { Logs } from "./logs";
import { Resources } from "./resources";
import { Trimps } from "./trimps";
import { Miscelaneous } from "./miscelaneous";

import styles from "./top-row.module.scss";

export function TopRow() {
  return (
    <div id="topRow" className={styles.block}>
      <Logs />

      <Trimps />

      <Miscelaneous />

      <Resources />
    </div>
  );
}
