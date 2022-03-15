import * as fs from 'fs';
import { join } from 'path';
import { argv } from 'yargs';
import { nanoid } from 'nanoid';

const distDir = (argv.distDir as string) || 'out';
const fileName = (argv.fileName as string) || 'version';

const path = join(distDir, `${fileName}.json`);

const payload = {
  version: process.env.CIRCLE_SHA1 || nanoid(),
};

fs.writeFile(path, JSON.stringify(payload), err => {
  if (err) throw err;

  console.log(`Next.js ${fileName}.json file created`);
  return;
});
