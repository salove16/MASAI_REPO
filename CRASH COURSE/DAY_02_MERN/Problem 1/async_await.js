const fs = require('fs').promises;

async function readFile(filename) {
  return await fs.readFile(filename, 'utf8');
}

async function readFiles(filenames) {
  try {
    const results = await Promise.all(filenames.map(readFile));
    return results;
  } catch (err) {
    throw err;
  }
}

const filenames = ['data1.txt', 'data2.txt','db.json'];

(async () => {
  try {
    const data = await readFiles(filenames);
    const aggregatedData = data.join('\n');
    console.log(aggregatedData);
  } catch (err) {
    console.error(err);
  }
})();
