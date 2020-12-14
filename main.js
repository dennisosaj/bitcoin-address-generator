const Bitcoin = require('bitcoin-address-generator');

var arguments = process.argv.slice(2);

if (arguments.length > 0) {
    if (arguments.length === 2) {
        for (var ii = 0; ii < arguments[0];) {
            Bitcoin.createWalletAddress(response => {
                if (response.address.startsWith(arguments[1])) {
                    console.log('key:' + response.key);
                    console.log('address:' + response.address);
                    ii++;
                }
            });
        }
    } else if (arguments.length === 1) {
        for (var ii = 0; ii < arguments[0]; ii++) {
            Bitcoin.createWalletAddress(response => {
                console.log('key:' + response.key);
                console.log('address:' + response.address);
            });
        }
    } else {
        console.log('1. argument = number to generate key-address combinations');
        console.log('2. argument = address starts with pattern');
    }
} else {
    Bitcoin.createWalletAddress(response => {
        console.log('key:' + response.key);
        console.log('address:' + response.address);
    });
}