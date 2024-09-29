import path from "node:path";
import http from "node:http";
import serveStatic from "serve-static";
import finalhandler from "finalhandler";
import { cwd } from "node:process";

const serve = serveStatic(path.join(cwd(), "dist"), { index: ["index.html"] });

// Create server
const server = http.createServer(function onRequest(req, res) {
  serve(req, res, finalhandler(req, res));
});

// Listen
server.listen(3000);
