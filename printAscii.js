const imageToAscii = require("image-to-ascii");
function printAscii(file) {
  imageToAscii(
    `./converted/${file}`,
    {
      colored: true,
      reverse: true,
      // pixels: " .......",
      // pixels: " ████",

      pixels: "  ■■■■■■■■",
    },
    (err, converted) => {
      console.log(err || converted);
    }
  );
}
// printAscii("abra.png");
module.exports = { printAscii };
