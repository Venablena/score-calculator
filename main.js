
const fs = require('fs')
const scores = fs.readFileSync('./scores.txt', 'utf-8')
const scoresArr = scores.split("\n")
const hiScoresArr = []

// const hiScoreArr = scoresArr.forEach((item, index, collection) => {
//   item.reduce
// })

const newArr = []

function highScore(){
//console.log("sanity check!" + scoresArr[0]);
  for (let i = 0; i < scoresArr.length; i++) {
    let sumArr = scoresArr[i].split(", ")
    //console.log(sumArr);
    let sum = 0
      for (let j = 1; j < sumArr.length; j++) {
        sum += parseInt(sumArr[j])
      }
    let obj = {'name':sumArr[0], 'hs':sum}
    //console.log(obj);
    newArr.push(obj)
    //console.log(newArr);
  }
  //console.log(newArr);
  return newArr
}

function sorting(array){
  return array.sort((a,b) => b.hs - a.hs)
}

highScore()
const sortedArr = sorting(newArr)
console.log(sortedArr[0])
