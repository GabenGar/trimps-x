import { useEffect } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { init } from "#legacy";

import "./styles/global.scss";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="fonts/icomoon/style.css" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <script defer src="Playfab/PlayFabSDK/PlayFabClientApi.js"></script>
        <script defer src="lz-string.js"></script>
        <script defer src="decimal.min.js"></script>
        <script defer src="config.js"></script>
        <script defer src="updates.js"></script>
        <script defer src="playerSpire.js"></script>
        <script defer src="objects.js"></script>
        <script defer src="main.js"></script>
        <Meta />
        <Links />
      </head>
      {/* Trimps
		Copyright (C) 2023 Zach Hood

		This program is free software: you can redistribute it and/or modify
		it under the terms of the GNU General Public License as published by
		the Free Software Foundation, either version 3 of the License, or
		(at your option) any later version.

		This program is distributed in the hope that it will be useful,
		but WITHOUT ANY WARRANTY; without even the implied warranty of
		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
		GNU General Public License for more details.

		You should have received a copy of the GNU General Public License
		along with this program (if you are reading this on the original
		author's website, you can find a copy at
		<trimps.github.io/license.txt>). If not, see
		<http://www.gnu.org/licenses/>.  */}
      <body>
        {children}
        <ScrollRestoration />

        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  useEffect(() => init(), []);

  return <Outlet />;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
