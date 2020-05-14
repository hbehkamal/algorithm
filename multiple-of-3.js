const fn = () => {
    let x = 0;
    for (let i = 1; i < 1000; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            x += i;
        }
    }
    return x;
}
console.log('---->', fn());
