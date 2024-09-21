const fs = require("fs");
const path = require('path');
// const { printAscii } = require("./printAscii");
const { execute } = require("./resizer");

fs.readdir("./images", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  files.forEach(async (file) => {
    if (path.extname(file).toLowerCase() === '.png') {
      console.log(file);
      await execute(file);
    }
  });
});
