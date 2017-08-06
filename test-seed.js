var rand = require('random-seed').create();
var seed = '3,0',
	rand1 = require('random-seed').create(seed),
	rand2 = require('random-seed').create(seed);
  rand3 = require('random-seed').create(seed);

  // rand4 = require('random-seed').create(seed),
  // rand5 = require('random-seed').create(seed);
  // rand6 = require('random-seed').create(seed);
  //
  // rand7 = require('random-seed').create(seed),
  // rand8 = require('random-seed').create(seed);
  // rand9 = require('random-seed').create(seed);
  //
  // rand10 = require('random-seed').create(seed),
  // rand11 = require('random-seed').create(seed);
  // rand12 = require('random-seed').create(seed);
console.log(rand1.intBetween(000, 005), rand2.floatBetween(0, 10), rand3.intBetween(0, 0));
// console.log(rand4(15), rand5(90), rand6(15));
// console.log(rand7(20), rand8(95), rand9(12));
// console.log(rand10(25), rand11(99), rand12(18));

function intToFloat(num, decPlaces) {
  return num.toFixed(decPlaces);
}
