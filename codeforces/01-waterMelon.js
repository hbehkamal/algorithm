// Watermelon - https://codeforces.com/problemset/problem/4/A

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('', w => {
    if (w != 2 || w % 2 !== 0) {
        console.log("NO");
    } else {
        console.log("YES");
    }
    readline.close();
});