// http://cryptocoinjs.com/
var CoinKey = require('coinkey')

// console.log("Private Key (Wallet Import Format): " + ck.privateWif)
// console.log("Private Key (Hex): " + ck.privateKey.toString('hex'))
// console.log("Address: " + ck.publicAddress)

var arguments = process.argv.slice(2);

if (arguments.length > 0) {
    if (arguments.length === 2) {
        var start = new Date().getTime();
        var total = 0;
        for (var ii = 0; ii < arguments[0];) {
            var ck = new CoinKey.createRandom();
            if (ck.publicAddress.startsWith(arguments[1])) {
                console.log('key:' + ck.privateWif);
                console.log('address:' + ck.publicAddress);
                ii++;
            }
            total++;
        }
        var end  = new Date().getTime();
        var time = end - start;
        console.log('Pattern: ' + arguments[1]);
        console.log('Total found: ' + arguments[0]);
        console.log('Execution time: ' + time + '[ms]');
        console.log('Total searched: ' + total);
        console.log('Addresses per second: ' + Math.ceil(total/(time/1000)) + '[K/s]');
        console.log('Performance: ' + arguments[0]/total + '[%]');
    } else if (arguments.length === 1) {
        var start = new Date().getTime();
        for (var ii = 0; ii < arguments[0]; ii++) {
            var ck = new CoinKey.createRandom();
            console.log('key:' + ck.privateWif);
            console.log('address:' + ck.publicAddress);
        }
        var end  = new Date().getTime();
        var time = end - start;
        console.log('Execution time: ' + time + '[ms]');
        console.log('Addresses per second: ' + Math.ceil(ii/(time/1000)) + '[K/s]');
    } else {
        console.log('1. argument = number to generate key-address combinations');
        console.log('2. argument = address starts with pattern');
    }
} else {
    var start = new Date().getTime();
    var ck = new CoinKey.createRandom();
    console.log('key:' + ck.privateWif);
    console.log('address:' + ck.publicAddress);
    var end  = new Date().getTime();
    var time = end - start;
    console.log('Execution time: ' + time + '[ms]');
}