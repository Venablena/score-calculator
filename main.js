const fs = require('fs')
const scores = fs.readFileSync('./scores.txt', 'utf-8')
const scoresArr = scores.split("\n")
console.log(scoresArr);
