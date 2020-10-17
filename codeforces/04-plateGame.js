// Plate Game - https://codeforces.com/problemset/problem/197/A

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (_input) => {
  const input = _input.split(" ").map(Number);
  plateGame(input[0], input[1], input[2]);
});

const plateGame = (a, b, r) => {
  if (2 * r <= a && 2 * r <= b) {
    console.log("First");
  } else {
    console.log("Second");
  }
};
