import Head from "next/head";
import { LegacyScripts } from "#components/legacy-scripts";
import { OfflineWrapper } from "#entities/offline";
import { BoneTrader } from "#entities/bone-trader";
import { Portal } from "#entities/portal";
import { PlayerSpire } from "#entities/player-spire";
import { MainScreen } from "#entities/main-screen";
import {
  AchievementsOverview,
  AchievementsPopup,
} from "#entities/achievements";
import { StatsOverview } from "#entities/stats";
import { MutationTree } from "#entities/mutations";
import { HeirloomsOverview, HeirloomsPopup } from "#entities/heirlooms";
import { Tooltip, Tooltip2 } from "#entities/tooltip";
import { Tutorial } from "#entities/tutorial";

import styles from "./index.module.scss";

function Home() {
  return (
    <>
      <Head>
        <title>Trimps 5.9.2</title>
        <meta name="description" content="TrimpsX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Greensatellite" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <noscript>
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
      </noscript>

      <OfflineWrapper />

      <BoneTrader />

      <MainScreen />

      <Portal />

      <AchievementsOverview />

      <StatsOverview />

      <MutationTree />

      <HeirloomsOverview />

      <AchievementsPopup />

      <HeirloomsPopup />

      <Tooltip />

      <Tooltip2 />

      <Tutorial />

      <PlayerSpire />

      <LegacyScripts />
    </>
  );
}

export default Home;
