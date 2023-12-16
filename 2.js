function checkPrime(number) {
	if (number < 2 || number > 1000) {
	alert("Введите число от 2 до 1000");
	return;
}

for (let i = 2; i <= Math.sqrt(number); i++) {
	if (number % i === 0) {
		console.log(`${number} не является простым числом.`);
		return;
	}
} 
	console.log(`${number} - простое число.`);
}

const user_input = parseInt(prompt("Введите число:"));
checkPrime(user_input);