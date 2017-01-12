/* jshint esversion: 6 */
/* jshint expr: true */

const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

	// test normal case
	it(`should, when given an integer x, return: "fizz-buzz" if
	 x is divisible by 3 && 5, "fizz" if x is divisible by 3, and "buzz"
	 if x is divisible by 5.`, function () {
	 	const normalCases = [
	 		{x: 3, expected: "fizz"},
	 		{x: 10, expected: "buzz"},
	 		{x: 30, expected: "fizz-buzz"}
	 	];
	 	normalCases.forEach(function(input) {
	 		const answer = fizzBuzzer(input.x);
	 		answer.should.equal(input.expected);
	 	});
	 });

	// test edge case
	it(`should throw an error when given non-numerical value.`, function() {
		const invalidInputs = [false, true, "Nope", null, undefined];
		invalidInputs.forEach(function(input) {
			(function() {
				fizzBuzzer(input);
			}).should.throw(Error);
		});
	});
});