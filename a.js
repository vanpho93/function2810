// const a = console.log;

    // // console.log(typeof a);

    // function getLog() {
    //     return console.log;
    // }

// getLog()(10);

// function addWith10(x) {
//     return x + 10;
// }

// function addWith5(x) {
//     return x + 5;
// }

function addWithX(x) {
    return function(y) {
        return x + y;
    }
}

// const addWith10 = addWithX(10);
// const addWith5= addWithX(5);

// console.log(addWith10(4));

console.log(addWithX(4)(5));
