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

function inSo(checkNumber) {
    for(let i = 0; i <= 100; i++) {
        const dk = checkNumber(i); // kiemTraSoChan(i)
        if (dk) console.log(i);
    }
}

inSo(function (n) {
    return n % 2 === 0;
});

inSo(function (n) {
    return n % 2 === 1;
});

inSo(function (n) {
    return n % 3 === 1;
});

inSo(function (n) {
    return Math.sqrt(n) % 1 === 0;
});





// function inSo(soChia, soDu) { 
//     for(let i = 0; i <= 100; i++) {
//         const dk = i % soChia === soDu;
//         if (dk) console.log(i);
//     }
// }

// function inSoChia3Du1() {
//     for(let i = 0; i <= 100; i++) {
//         const dk = i % 3 === 1;
//         if (dk) console.log(i);
//     }
// }

// function inSoChinhPhuong() {
//     for(let i = 0; i <= 100; i++) {
//         const dk = Math.sqrt(i) % 1 === 0;
//         if (dk) console.log(i);
//     }
// }
