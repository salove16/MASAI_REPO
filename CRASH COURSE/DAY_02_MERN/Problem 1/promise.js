const fs = require('fs').promises;

function readFile(filename) {
  return fs.readFile(filename, 'utf8');
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

readFiles(filenames)
  .then((data) => {
    
    const aggregatedData = data.join('\n');
    console.log(aggregatedData);
  })
  .catch((err) => {
    console.error(err);
  });
