import { readFile, writeFile } from "node:fs/promises";

const portraitUrl = new URL("../public/assets/alina-portrait.jpg", import.meta.url);
const templateUrl = new URL("../public/assets/alina-portrait-cutout.svg", import.meta.url);
const outputUrl = new URL("../public/assets/alina-portrait-inline.svg", import.meta.url);

const [portrait, template] = await Promise.all([
  readFile(portraitUrl),
  readFile(templateUrl, "utf8"),
]);

const embeddedPortrait = `data:image/jpeg;base64,${portrait.toString("base64")}`;
const output = template.replace('href="alina-portrait.jpg"', `href="${embeddedPortrait}"`);

if (output === template) {
  throw new Error("Portrait reference was not found in the SVG template.");
}

await writeFile(outputUrl, output, "utf8");
console.log("Created self-contained portrait SVG:", outputUrl.pathname);
