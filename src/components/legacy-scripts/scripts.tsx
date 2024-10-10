import { useEffect, useRef } from "react";
import { init } from "#legacy";

const legacyScripts = [
  "Playfab/PlayFabSDK/PlayFabClientApi.js",
  "lz-string.js",
  "decimal.min.js",
  "config.js",
  "updates.js",
  "playerSpire.js",
  "objects.js",
  "main.js",
];

export function LegacyScripts() {
  const ref = useRef<HTMLElementTagNameMap["div"]>(null);

  useEffect(() => {
    (async () => {
      for await (const src of legacyScripts) {
        await loadScript(src, ref.current!);
      }

      init();
    })();
  }, []);

  return <div ref={ref} />;
}

async function loadScript(
  src: string,
  parentElement: HTMLElementTagNameMap["div"],
) {
  return new Promise<void>((resolve) => {
    const script = document.createElement("script");

    script.defer = true

    script.onload = () => resolve();

    parentElement.appendChild(script);

    script.src = src;
  });
}
