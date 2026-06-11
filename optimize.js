import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = './src/assets';
const files = fs.readdirSync(dir);

async function optimizeImages() {
  for (const file of files) {
    if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png')) {
      const inputPath = path.join(dir, file);
      // Keep the same name but change extension to .webp
      const newFileName = file.replace(/\.(jpg|JPG|png)$/, '.webp');
      const outputPath = path.join(dir, newFileName);
      
      console.log(`Optimizing ${file}...`);
      try {
        await sharp(inputPath)
          .resize({ width: 1200, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
        console.log(`Saved ${outputPath}`);
      } catch (err) {
        console.error(`Failed to optimize ${file}:`, err);
      }
    }
  }
}

optimizeImages();
