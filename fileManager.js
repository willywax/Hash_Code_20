const Path = require('path');
const fs = require('fs');


class FileManager {
  readFile(fileName) {
    const data = {};
    const lines = fs.readFileSync(Path.resolve(__dirname, `${fileName}.in`), 'utf-8')
    .split('\n');
    data['slices'] = lines[0].split(' ').map(x=>+x);
    data['pizzas'] = lines[1].split(' ').map(x=>+x);
    return data;
  }

  writeFile(data, fileName) {
    const logger = fs.createWriteStream(`${fileName}.out`, {
      flags: 'a' 
    })
    
    logger.write(`${data.length.toString()}\n`)
    logger.write(data.sort().join(' ')) 
    logger.end();
  }
}
const fileManager = new FileManager;

module.exports = fileManager;