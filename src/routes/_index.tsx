import type { MetaFunction } from "@remix-run/node";

import styles from "./_index.module.scss";

export const meta: MetaFunction = () => {
  return [
    { title: "Trimps 5.9.2" },
    { name: "description", content: "TrimpsX" },
  ];
};

export default function Index() {
  return (
    <>
      {/* <noscript>
        <div id="checkJavascript" className={styles.noscript}>
          For some reason, your browser is having trouble loading this game.
          This game runs on javascript, and if you have an addon such as
          noscript, you may need to tell it to allow scripts from
          http://trimps.github.io, which is where this game is hosted.
          <br />
          <br />
          If you are not using any addons that might interfere with javascript,
          try using the latest versions of Chrome or Firefox.
        </div>
      </noscript> */}
    </>
  );
}
