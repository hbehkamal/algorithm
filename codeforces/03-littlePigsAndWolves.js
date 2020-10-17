// Little Pigs and Wolves - https://codeforces.com/problemset/problem/116/B

const main = async () => {
  const arr = [];
  let len = [];

  const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let m, n;
  let i = 1;

  for await (const line of rl) {
    if (!len.length) {
      len = line.split(" ").map(Number);
      n = len[0];
      m = len[1];
      arr[n + 1] = [];
      arr[0] = [];
      for (let x = 0; x < m + 2; x++) {
        arr[0].push(".");
        arr[n + 1].push(".");
      }
    } else {
      if (i < n) {
        arr[i] = ["."];
        arr[i].push(...line.split(""));
        arr[i].push(".");
      } else {
        arr[i] = ["."];
        arr[i].push(...line.split(""));
        arr[i].push(".");
        rl.close();
      }
      i++;
    }
  }
  runGame(arr, m, n);
};

const runGame = (arr, m, n) => {
  let output = 0;

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (arr[i][j] == "W") {
        if (
          arr[i - 1][j] == "P" ||
          arr[i + 1][j] == "P" ||
          arr[i][j - 1] == "P" ||
          arr[i][j + 1] == "P"
        ) {
          output++;
        }
      }
    }
  }
  console.log(output);
};

main();
