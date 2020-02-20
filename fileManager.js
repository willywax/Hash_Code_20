const Path = require('path');
const fs = require('fs');


class FileManager {
  readFile(fileName) {
    const data = [];
    const lines = fs.readFileSync(Path.resolve(__dirname, `${fileName}.txt`), 'utf-8')
    .split('\n');

    const libraries = []
    for(let i=0; i < lines.length; i++){
      const arr = lines[i].split(' ').map(x=>+x);
      const library = {
        noBooks: 0,
        signUpDays: 0,
        booksPerDay: 0,
        books: []
      }
    
      if(i == 0){
        const initialData = {
          noBooks: parseInt(arr[0]),
          noLibraries: parseInt(arr[1]),
          maxDays: parseInt(arr[2])
        }
        data.push(initialData)
      }else if( i == 1){
        data.push(arr)
      }else {
        library.noBooks = arr[0]
        library.signUpDays = arr[1]
        library.booksPerDay = arr[2]
        library.books = lines[i].split(' ').map(x=>+x);
        i += 1
        data.push(library)
      }
    
    }

    const newData = data.splice(-1,1)

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