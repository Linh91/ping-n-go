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


// var m_w = 123456789;
// var m_z = 987654321;
// var mask = 0xffffffff;
//
// // Takes any integer
// function seed(i) {
//     m_w = i;
//     m_z = 987654321;
// }
//
// // Returns number between 0 (inclusive) and 1.0 (exclusive),
// // just like Math.random().
// function random()
// {
//     m_z = (36969 * (m_z & 65535) + (m_z >> 16)) & mask;
//     m_w = (18000 * (m_w & 65535) + (m_w >> 16)) & mask;
//     var result = ((m_z << 16) + m_w) & mask;
//     result /= 4294967296;
//     return result + 0.5;
// }
//
// var seed = 1;
// function random() {
//     var x = Math.sin(seed++) * 10000;
//     return x - Math.floor(x);
// }
