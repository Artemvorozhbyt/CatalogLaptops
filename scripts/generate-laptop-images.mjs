import fs from "fs";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, "..", "js", "laptops.generated.js");

const generated = `import { laptops as sourceLaptops } from "./laptops.source.js";\n\n` +
  `const slugify = (text = "") =>\n` +
  `  text\n` +
  `    .toString()\n` +
  `    .normalize("NFKD")\n` +
  `    .replace(/[\\u0300-\\u036f]/g, "")\n` +
  `    .replace(/[^a-z0-9]+/gi, "-")\n` +
  `    .toLowerCase()\n` +
  `    .replace(/^-+|-+$/g, "") || "laptop";\n\n` +
  `const generateImages = (source) => {\n` +
  `  const slug = slugify(source || "");\n` +
  `  return [\n` +
  `    \\`/images/laptops/${slug}-1.jpg\\`,\n` +
  `    \\`/images/laptops/${slug}-2.jpg\\`,\n` +
  `    \\`/images/laptops/${slug}-3.jpg\\`,\n` +
  `  ];\n` +
  `};\n\n` +
  `export const laptops = sourceLaptops.map((laptop) => {\n` +
  `  if (Array.isArray(laptop.images) && laptop.images.length > 0) {\n` +
  `    return laptop;\n` +
  `  }\n\n` +
  `  return {\n` +
  `    ...laptop,\n` +
  `    images: generateImages(laptop.name || laptop.brand || \\`laptop-${laptop.id}\\`),\n` +
  `  };\n` +
  `});\n`; 

fs.writeFileSync(outputPath, generated, "utf8");
console.log(`Wrote ${outputPath}`);
