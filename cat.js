const fs = require('fs')

function cat(arg) {
  fs.readFile(`./${arg}`, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    process.stdout.write("\nprompt >")
  });
}

module.exports.cat = cat
