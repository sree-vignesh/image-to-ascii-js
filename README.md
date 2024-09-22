# Image to ASCII Converter

This project converts images into an ASCII-friendly format and displays them in the terminal. It utilizes `image-js` and `image-to-ascii` libraries to show ASCII art representations of your images.

## Credits

- **image-js**
- **image-to-ascii**

## To Do

   1. An script to show a custom ascii art everytime a new terminal is opened.

## Getting Started

Follow these step-by-step instructions to convert your images:

1. **Place the Images**: Add your images to the `images` folder. Ensure the images are in a supported format (e.g., PNG, JPG).

2. **Run the Conversion Script**: Open your terminal and run the following command:
   ```bash
   npm run convert
   ```

3. **Find the Converted Images**: After the conversion process completes, you will find the converted ASCII images in the `converted` folder. If the folder doesn’t exist, create it .

4. **Verify the Conversion**: To verify the conversion, use the `image-to-ascii` library. This will allow you to see the ASCII art representation directly in the terminal.
5. ```bash
   npm run show {fullfilename}
   ```

6. **Download Pokémon Images**: If you need some images to start with, run the `get-pokemon.sh` script located in the `images` folder. This script will download Pokémon sprites for you.
