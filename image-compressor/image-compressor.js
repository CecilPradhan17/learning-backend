import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const [, , dirPath, outPath ] = process.argv;
const files = fs.readdirSync(dirPath);

const compressImages = async () => {
    const images = filterImages(files);

    images.forEach( async (image) => {
        const inputPath = path.join(dirPath, image);
        const outputDir = outPath ?? dirPath;  // output path if it exists, if not original path
        const outputPath = path.join(outputDir, image);

        await sharp(inputPath).jpeg({ quality: 70 }).toFile(outputPath); 

        console.log(`compressed ${image}`);
    })
}

const filterImages = (files) => {
    return files.filter((file) => {
        return path.extname(file) === '.jpeg' // only include .jpeg images
    })
}

compressImages();