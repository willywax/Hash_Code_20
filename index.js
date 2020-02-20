const fileManager = require('./fileManager');


// Name of File
const file = 'data/b_read_on';
// const file = 'data/a_example';

const data = fileManager.readFile(file)


fileManager.writeFile([10, 12, 13], 'result/a_result')

console.log('Data === ', data);
