process.stdout.write('prompt > ');

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //pwd   curl url
  const fncArgs = cmd.split(' ') // ['pwd']  ['curl', 'url']
  const importedObj = require(`./${fncArgs[0]}`)
  const fn = importedObj[`${fncArgs[0]}`]
  if(fncArgs.length > 1) {
    fn(fncArgs[1])
  } else {
    fn()
  }

  // if (cmd === "pwd") {
  //   const pwdObject = require('./pwd')
  //   pwdObject.pwd()
  // }
  // if (cmd === "ls"){
  //   const lsObject = require('./ls')
  //   lsObject.ls()
  // }
  // //process.stdout.write("You typed: " + cmd);
  // //process.stdout.write("\nprompt > ");
  // if (cmd.slice(0,3) === 'cat') {
  //   const catObject = require('./cat')
  //   const arg = cmd.split(' ')[1]
  //   catObject.cat(arg)
  // }
  // if (cmd.slice(0,4) === 'curl') {
  //   const curlObject = require('./curl')
  //   const arg = cmd.split(' ')[1]
  //   curlObject.curl(arg)
  // }

})
