const { Worker } = require('worker_threads');

new Worker('./thread_01.js');
new Worker('./thread_02.js');
new Worker('./thread_03.js');