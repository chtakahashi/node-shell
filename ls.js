const fs = require('fs')

function ls(){
  fs.readdir("./", (err, files) => {
    if (err) throw err
    else {
      process.stdout.write(files.join('\n'));
      process.stdout.write("\nprompt >")
    }
  })
}

module.exports.ls = ls
