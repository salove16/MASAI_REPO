const fs = require('fs');

function readFile(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}

function readFiles(filenames, callback) {
  let results = [];
  let count = 0;

  filenames.forEach((filename) => {
    readFile(filename, (err, data) => {
      if (err) {
        return callback(err);
      }
      results.push(data);
      count++;
      if (count === filenames.length) {
        callback(null, results);
      }
    });
  });
}

const filenames = ['data1.txt', 'data2.txt','db.json'];

readFiles(filenames, (err, data) => {
  if (err) {
    console.error(err);
  } else {

    const aggregatedData = data.join('\n');
    console.log(aggregatedData);
  }
});