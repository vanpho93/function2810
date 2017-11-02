function doSth(fn) {
    for(let i = 0; i < 10; i++) {
        fn(i);// console.log(1)
    }
}

doSth(console.log);
