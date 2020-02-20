const fileManager = require('./fileManager');


const file = 'data/b_read_on';

const data = fileManager.readFile(file)


fileManager.writeFile([10, 12, 13], 'result/a_result')

console.log('Data === ', data);
