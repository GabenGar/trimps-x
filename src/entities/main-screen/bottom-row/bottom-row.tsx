import { BuyColumn } from "./buy";
import { Combat } from "./combat";

import styles from "./bottom-row.module.scss";

export function BottomRow() {
  return (
    <div id="bottomRow">
      <BuyColumn />

      <Combat />
    </div>
  );
}
