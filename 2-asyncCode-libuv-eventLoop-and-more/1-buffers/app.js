'use strict'
// Because buffer is such a fundamental concept within Node, it does not need a require function.  Buffer is global.
// Data - First arg is size (a finite number).  You can use a number or string value.  The second arg is encoding.  If not used, utf8 is default
// This line is saying take this string and convert it to binary data and in order to convert it, it will use utf8 encoding.
const buf = new Buffer('Hello', 'utf8')
// The buffer is an object and contains 5 characters, pieces of binary data.  Output in hexidecimal notation to make shorter and easier to read.
console.log(buf)
// Convert back to a string.  Since it knows encoding it can look at data, go back up tree and convert to characters.
console.log(buf.toString())
// Convert to JSON.  Object with type: 'Buffer', data: [unicode character set numbers, converted to base 10]
console.log(buf.toJSON())
// Buffer behaves like an array.  This pulls 108.
console.log(buf[2])
// Writing data to the buffer.  Buffers are a finite piece of data.  This will replace 'He' and return 'wollo'.
buf.write('wo');
console.log(buf.toString());