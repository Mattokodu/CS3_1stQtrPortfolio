console.log("AGFDGSDGFg");

rl = require('readline') // #include<bits/stdc++.h> sa c++
rli = rl.createInterface({
    input: process.stdin,
})

rli.on("line", get_station)

function get_station(num) {

    switch (num) {
        case '2':
            console.log('You selected: ABS-CBN');
            break;
        default:
            console.log('TEST');
    }
}