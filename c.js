/*
    1. Function in cac so chan trong khoang 1 -> 100
    1. Function in cac so le trong khoang 1 -> 100
    1. Function in cac so chia 3 du 1 trong khoang 1 -> 100
    1. Function in cac so chinh phuong trong khoang 1 -> 100
*/

function inSoChan() {
    for(let i = 0; i <= 100; i++) {
        const dk = i % 2 === 0;
        if (dk) console.log(i);
    }
}

function inSoLe() {
    for(let i = 0; i <= 100; i++) {
        const dk = i % 2 === 1;
        if (dk) console.log(i);
    }
}

function inSoChia3Du1() {
    for(let i = 0; i <= 100; i++) {
        const dk = i % 3 === 1;
        if (dk) console.log(i);
    }
}

function inSoChinhPhuong() {
    for(let i = 0; i <= 100; i++) {
        const dk = Math.sqrt(i) % 1 === 0;
        if (dk) console.log(i);
    }
}

inSoChan();

// console.log(Math.sqrt(4) % 1);