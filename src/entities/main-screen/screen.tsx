import { BottomRow } from "./bottom-row";
import { Settings } from "./settings";
import { TopRow } from "./top-row";

export function MainScreen() {
  return (
    <div id="wrapper" style={{ background: "url('/css/bg2.png') center repeat-x" }}>
      <div id="innerWrapper">
        <div id="warnings"></div>

        <TopRow />

        <BottomRow />

        <Settings />
      </div>
    </div>
  );
}
