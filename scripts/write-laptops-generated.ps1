$dst = Join-Path $PSScriptRoot "..\js\laptops.generated.js"
$content = @'
import { laptops as sourceLaptops } from "./laptops.source.js";

const slugify = (text = "") =>
  text
    .toString()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "") || "laptop";

const generateImages = (source) => {
  const slug = slugify(source || "");
  return [
    `/images/laptops/${slug}-1.jpg`,
    `/images/laptops/${slug}-2.jpg`,
    `/images/laptops/${slug}-3.jpg`,
  ];
};

export const laptops = sourceLaptops.map((laptop) => {
  if (Array.isArray(laptop.images) && laptop.images.length > 0) {
    return laptop;
  }

  return {
    ...laptop,
    images: generateImages(laptop.name || laptop.brand || `laptop-${laptop.id}`),
  };
});
'@
Set-Content -Path $dst -Value $content -Encoding utf8
Write-Output "Wrote $dst"