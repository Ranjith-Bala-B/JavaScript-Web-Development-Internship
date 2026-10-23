console.log("--Multiplication Table of 5--");

for (let i = 1; i <= 5; i++) {
    console.log("5x" + i + "=" + (5 * i));
}

console.log("--First number >10 divisible by 6--");

let num = 11;

while (true) {
    if (num > 10 && num % 6 === 0) {
        console.log("Found:" + num);
        break;
    }
    num++;
}

let i = 1;

do {
    i++;

    if (i === 3) {
        continue;
    }

    if (i > 5) {
        break;
    }

    console.log(i);
} while (i < 5);