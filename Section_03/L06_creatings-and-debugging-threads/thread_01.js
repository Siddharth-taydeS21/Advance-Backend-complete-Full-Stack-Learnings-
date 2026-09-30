console.time()
for (let i = 0; i <= 1000000000; i++) {
    if (i === 0 ) console.log('Loop 1 started..');
    if (i === 1000000000 ) console.log('we got it, Loop ended!');
}
console.timeEnd()