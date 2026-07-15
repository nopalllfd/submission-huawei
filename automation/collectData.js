import fs from 'fs';
import path from 'path';

const outputDir = './cron';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const now = new Date();

const date = `${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}${now.getFullYear()}`;

const hour = `${String(now.getHours()).padStart(2, '0')}.${String(now.getMinutes()).padStart(2, '0')}`;

const fileName = `cron_${date}_${hour}.csv`;

const filePath = path.join(outputDir, fileName);

const csvContent = `timestamp,data\n${now.toISOString()},Sample Data`;

fs.writeFileSync(filePath, csvContent);

console.log(`Created ${fileName}`);
