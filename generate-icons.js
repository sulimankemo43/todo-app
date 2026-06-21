import sharp from "sharp";

const source = "src/assets/hero.png";

async function makeIcons() {
  await sharp(source).resize(192, 192).toFile("public/pwa-192x192.png");
  await sharp(source).resize(512, 512).toFile("public/pwa-512x512.png");
  console.log("Icons created successfully in public/");
}

makeIcons().catch((err) => {
  console.error("Failed to create icons:", err);
});