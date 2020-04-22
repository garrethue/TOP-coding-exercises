function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (arr) {
	const theSum = arr.reduce((total, num) => {
		return total + num;
	}, 0);
	return theSum;
}

function multiply (arr) {
	const multiplyNums = arr.reduce((result, num) => {
		return result * num;
	}, 1);
	return multiplyNums;
}

function power(num1, num2) {
	return num1 ** num2;
}

function factorial(num) {
	if (num === 0) {
			return 1;
	}
	else {
			return num * factorial(num - 1);
	}

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
