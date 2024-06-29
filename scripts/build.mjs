import fs from "node:fs/promises";
import path from "node:path";
import { cwd } from "node:process";

const inputPath = path.join(cwd(), "src");
const outputPath = path.join(cwd(), "dist");

await fs.rm(outputPath, { force: true, recursive: true });
await fs.mkdir(outputPath, { recursive: true });
await fs.cp(inputPath, outputPath, { recursive: true });
