import fs from 'fs';
import path from 'path';

const [, , dirPath, name] = process.argv; // [, , directory path with files to change, the name to change it to]

const files = fs.readdirSync(dirPath); // return array of all file names

files.forEach((file, index) => {
    const oldPath = path.join(dirPath, file);
    const extension = path.extname(file);    // .img or .txt .etc
    const newName = `${name}${index}${extension}`;
    const newPath = path.join(dirPath, newName); 

    fs.renameSync(oldPath, newPath);
});