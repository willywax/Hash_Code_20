const fileManager = require('./fileManager');


const file = 'data/a_example';

const data = fileManager.readFile(file)


fileManager.writeFile(data, 'data/a_result')

console.log('Data === ', data);
