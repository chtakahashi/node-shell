process.stdout.write('prompt > ');

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    const pwdObject = require('./pwd')
    pwdObject.pwd()
  }
  if (cmd === "ls"){
    const lsObject = require('./ls')
    lsObject.ls()
  }
  //process.stdout.write("You typed: " + cmd);
  //process.stdout.write("\nprompt > ");

})

