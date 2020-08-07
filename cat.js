const fs = require('fs')

function cat(arg) {
  fs.readFile(`./${arg}`, 'utf8', (err, data) => {
    if (err) {
      console.error('error: ', err)
      process.stdout.write("\nprompt >")
    } else {
      console.log(data);
      process.stdout.write("\nprompt >")
    }
  });
}

module.exports.cat = cat
