import { BottomRow } from "./bottom-row";
import { Settings } from "./settings";
import { TopRow } from "./top-row";
import bgImage from "#assets/images/bg2.png";

export function MainScreen() {
  return (
    <div
      id="wrapper"
      style={{ background: `url('${bgImage.src}') center repeat-x` }}
    >
      <div id="innerWrapper">
        <div id="warnings"></div>

        <TopRow />

        <BottomRow />

        <Settings />
      </div>
    </div>
  );
}
