const { Image } = require("image-js");

// execute().catch(console.error);

async function execute(file) {
  let imagePath = `./images/${file}`;
  let image = await Image.load(imagePath);
  let grey = image
    // .grey() // convert the image to greyscale.

    .resize({ width: 50 }); // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.
  grey.save(`./converted/${file}`);

  //   let _2darray = grey.getRGBAData();
  //   console.log(_2darray[1400]);
  //   let test = new Image(50, 50);
  //   test.paintPolygon(_2darray);
  // .rotate(30); // rotate the image clockwise by 30 degrees.

  //   return test.save("./converted/pikachu.png");
}
module.exports = { execute };
