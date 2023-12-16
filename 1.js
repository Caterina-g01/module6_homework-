const myArray = [1, 3, 0, 4, 5, 0, 8, 'string', null, 9];
function countZeroEvenOdd (arr) {
	let evenCount = 0;
	let oddCount = 0;
	let zeroCount = 0;

	for ( let i = 0; i < arr.length; i++ ) {
		if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
			if (arr[i] === 0) {
				zeroCount ++;
			}
			else if (arr[i] % 2 === 0) {
				evenCount ++;
			} else {
				oddCount ++;
			}
			} 
		}
		console.log(`Чётные числа: ${evenCount}`);
		console.log(`Нечётные числа: ${oddCount}`);
		console.log(`Нуливые значения: ${zeroCount}`);
	}



countZeroEvenOdd(myArray);