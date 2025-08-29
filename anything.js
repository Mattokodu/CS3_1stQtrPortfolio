console.log("AGFDGSDGFg");

rl = require('readline') // #include<bits/stdc++.h> sa c++
rli = rl.createInterface({ // adding the input
    input: process.stdin,
})


/*

rli.on('line', get_station) IT CONTINUES ON CHECKING DO I SEE A 'LINE' AHGTHAHAGHAHAHAHAH

function get_station(num) {

    switch (num) {
        case '2':
            console.log('You selected: ABS-CBN');
            break;
        default:
            console.log('TEST');
    }
}

*/

rli.on('line', isPrime)

function isPrime(num) {

    if (num < 2) {
        console.log("Number is not prime nor composite.");
    }
    else if (num == 2) {
        console.log("Number is prime.");
    }
    else {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            console.log("Number is prime.");
        }
        else {
            console.log("Number is not prime.");
        }
    }

}