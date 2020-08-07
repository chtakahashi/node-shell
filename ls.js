const fs = require('fs')

function ls(){
  fs.readdir("./", (err, items) => {
    if (err) throw err
    else {
      process.stdout.write(items.join('\n'));
      process.stdout.write("\nprompt >")
    }
  })
}

module.exports.ls = ls
