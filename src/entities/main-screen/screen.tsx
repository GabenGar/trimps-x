import bgImage from "#assets/images/bg2.png";
import { BottomRow } from "./bottom-row/bottom-row";
import { Settings } from "./settings";
import { TopRow } from "./top-row/top-row";

import styles from "./screen.module.scss"

export function MainScreen() {
  return (
    <div
      id="wrapper"
      style={{ background: `url('${bgImage.src}') center repeat-x` }}
    >
      <div id="innerWrapper" className={styles.inner}>
        <div id="warnings"></div>

        <Settings />

        <TopRow />

        <BottomRow />
      </div>
    </div>
  );
}
