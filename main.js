// http://cryptocoinjs.com/
var CoinKey = require('coinkey')

// console.log("Private Key (Wallet Import Format): " + ck.privateWif)
// console.log("Private Key (Hex): " + ck.privateKey.toString('hex'))
// console.log("Address: " + ck.publicAddress)

var arguments = process.argv.slice(2);

if (arguments.length > 0) {
    if (arguments.length === 2) {
        for (var ii = 0; ii < arguments[0];) {
            var ck = new CoinKey.createRandom();
            if (ck.publicAddress.startsWith(arguments[1])) {
                console.log('key:' + ck.privateWif);
                console.log('address:' + ck.publicAddress);
                ii++;
            }
        }
    } else if (arguments.length === 1) {
        for (var ii = 0; ii < arguments[0]; ii++) {
            var ck = new CoinKey.createRandom();
            console.log('key:' + ck.privateWif);
            console.log('address:' + ck.publicAddress);
        }
    } else {
        console.log('1. argument = number to generate key-address combinations');
        console.log('2. argument = address starts with pattern');
    }
} else {
    var ck = new CoinKey.createRandom();
    console.log('key:' + ck.privateWif);
    console.log('address:' + ck.publicAddress);
}