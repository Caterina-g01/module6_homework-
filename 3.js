function createAdder (x) {
	return function (y) {
return x + y;
	};
}

const addNum = createAdder(3);
const result = addNum(10);

console.log(result);