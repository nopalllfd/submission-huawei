import fs from 'fs';
import path from 'path';

const outputDir = './cron';

if (!fs.existsSync(outputDir)) {
  process.exit(0);
}

const files = fs.readdirSync(outputDir);

const now = Date.now();

for (const file of files) {
  const filePath = path.join(outputDir, file);

  const stats = fs.statSync(filePath);

  const ageInDays = (now - stats.mtimeMs) / (1000 * 60 * 60 * 24);

  if (ageInDays > 30) {
    fs.unlinkSync(filePath);
    console.log(`Deleted ${file}`);
  }
}
