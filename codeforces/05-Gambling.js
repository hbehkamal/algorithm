// Gambling - https://codeforces.com/problemset/problem/1038/C

const main = async () => {
    let listLen = 0;
    const listA = [];
    const listB = [];
  
    const rl = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    for await (const line of rl) {
      if (!listLen) {
        listLen = Number(line);
      } else {
        if (listA.length < listLen) {
            sortList(line.split(' ')).map((item)=> listA.push(Number(item)));
        } else {
            rl.close();
            sortList(line.split(' ')).map((item)=> listB.push(Number(item)));
        }
      }
    }
  
    runGame(listLen, listA, listB);
  };

  const sortList = (list) => list.sort((a, b) => a - b)
  
  const runGame = (listLen, listA, listB) => {


    let scoreA = 0;
    let scoreB = 0;

    for (let i = 0; i <= listLen * 2; i++) {
        if (i % 2 === 0) {
            if (!listB.length || listA[listA.length - 1] > listB[listB.length - 1]) {
                scoreA += listA[listA.length - 1] || 0;
                listA.pop()
            } else {
                listB.pop()
            }
        } else {
            if (!listA.length || listB[listB.length - 1] > listA[listA.length - 1]) {
                scoreB += listB[listB.length - 1] || 0;
                listB.pop()
            } else {
                listA.pop()
            }
        }
        
    }

    console.log(scoreA - scoreB);
  };
  
  
  main();
