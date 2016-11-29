'use strict'
// Offers ability to work with binary numbers and see them in base 10 format
// 8 is size in bytes - 64 bits (0's and 1's) of data
const buffer = new ArrayBuffer(8)
// Dealing with data with a typed array.  Changing the array changes the buffer.  In this case the data is stored in Int32Array structure.  An array of numbers consisting of 32 bits.
let view = new Int32Array(buffer)
view[0] = 5
view[1] = 15
// This will not error, but it will not show because there is not enough room in the buffer.  only 64 bits of room is available and its consumed by the first two numbers.
view[2] = 30
// You can see the numbers in base 10
console.log(view)