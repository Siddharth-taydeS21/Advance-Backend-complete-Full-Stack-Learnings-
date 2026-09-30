for (let i = 0; i <= 1000000000; i++) {
    if(i === 0) console.log('Loop 2 Started...');
    if(i % 400000000 === 0) console.log('Found the division : ', i) 
    if(i === 1000000000) console.log('We got it, loop ended!');
}