const Path = require('path');
const fs = require('fs');


class FileManager {
  readFile(fileName) {
    const data = [];
    const lines = fs.readFileSync(Path.resolve(__dirname, `${fileName}.txt`), 'utf-8')
    .split('\n');

    for(let i=0; i < lines.length; i++){
      const arr = lines[i].split(' ').map(x=>+x);
      data.push(arr)
    }
    // data['slices'] = 
    // data['pizzas'] = lines[1].split(' ').map(x=>+x);
    return data;
  }

  writeFile(data, fileName) {
    const logger = fs.createWriteStream(`${fileName}.out`)
    
    logger.write(`${data.length.toString()}\n`)
    logger.write(data.sort().join(' ')) 
    logger.end();
  }
}
const fileManager = new FileManager;

module.exports = fileManager;