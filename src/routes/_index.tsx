import type { MetaFunction } from "@remix-run/node";

import styles from "./_index.module.scss";

export const meta: MetaFunction = () => {
  return [
    { title: "Trimps 5.9.2" },
    { name: "description", content: "TrimpsX" },
    { name: "author", content: "Greensatellite" },
  ];
};

export default function Index() {
  return <></>;
}
