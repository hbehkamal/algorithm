// Digit Game - https://codeforces.com/problemset/problem/1419/A

const main = async () => {
  const inputs = [];
  let times = null;

  const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  for await (const line of rl) {
    if (!times) {
      times = line;
    } else {
      if (inputs.length < times * 2 - 1) {
        inputs.push(line);
      } else {
        inputs.push(line);
        rl.close();
      }
    }
  }

  runGame(times, inputs);
};

const runGame = (times, inputs) => {
  for (let i = 0; i < times; i++) {
    findMatch(inputs[i * 2], inputs[i * 2 + 1]); // len, digits
  }
};

const findMatch = (len, digits) => {
  const arr = digits.toString(10).split("").map(Number);
  let output = 0;

  if (len % 2 === 0) {
    for (let evenIndex = 0; evenIndex < +len / 2; evenIndex++) {
      if (arr[2 * evenIndex + 1] % 2 === 0) output++;
    }
    if (output > 0) {
      console.log("2");
    } else {
      console.log("1");
    }
  } else {
    output = 0;

    for (let oddIndex = 0; oddIndex < (+len + 1) / 2; oddIndex++) {
      if (arr[2 * oddIndex] % 2 !== 0) output++;
    }
    if (output > 0) {
      console.log("1");
    } else {
      console.log("2");
    }
  }
};

main();
