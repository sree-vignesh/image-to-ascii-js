const fs = require("fs");
const { printAscii } = require("./printAscii");


fs.readdir("./converted", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  files.forEach(async (file) => {
    printAscii(file);
  });
});
