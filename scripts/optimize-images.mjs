// Generates responsive WebP variants from source-images/ into public/images/.
// Run: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const SRC = "source-images";
const OUT = "public/images";
const WIDTHS = [640, 1280, 1920];

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (/\.jpe?g$/i.test(e.name)) out.push(p);
  }
  return out;
}

for (const file of await walk(SRC)) {
  const rel = path.relative(SRC, file).split(path.sep).join("/");
  const base = rel.replace(/\.jpe?g$/i, "");
  await mkdir(path.dirname(path.join(OUT, base)), { recursive: true });
  const { width } = await sharp(file).metadata();
  // File names use the nominal width; the last one is capped at the source width.
  for (const w of WIDTHS) {
    const dest = path.join(OUT, `${base}-${w}.webp`);
    await sharp(file)
      .resize({ width: Math.min(w, width) })
      .webp({ quality: 74 })
      .toFile(dest);
    console.log(dest, Math.round((await stat(dest)).size / 1024) + "KB");
    if (w >= width) break;
  }
}
