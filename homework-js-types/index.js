// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const calculation = (0.1*10+0.2*10)/10;
console.log(calculation, calculation === 0.3);


/*Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних),
 добийся математично правильної відповіді.*/
const one = "1";
const two = "2";
const sum = +one + Number(two);
console.log(sum, sum === 3);


/* Користувач вказує обсяг флешки в Гб. 
Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.*/
const size = +prompt('What is the size of flash memory (Gb)?')*1024;
const amount = Math.floor(size / 820);
alert(`Flash memory can take ${amount} file(s)`);


/*Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.
 Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.*/
const money = +prompt('How much do you have?');
const price = +prompt('How much does one chocolate costs?');
const chocoAmount = Math.floor(money / price);
const exchange = money - chocoAmount*price;
alert(`You can buy ${chocoAmount} chocolate(s), and will have ${exchange}$ left`);


/*Запитай у користувача тризначне число і виведи його задом наперед.
 Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).*/
let threeDig = prompt("Enter three digits number");
threeDig.length === 3 ? threeDig = Number(threeDig) : threeDig = +prompt("Enter three digits number")
const firstDigit = threeDig % 10;
const secondDigit = Math.floor(threeDig / 10) % 10;
const thirdDigit = Math.floor(threeDig / 100) % 10;
const combination = String(firstDigit) + String(secondDigit) + String(thirdDigit);

alert(`${combination} is revert number`)

/*Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних.
 Вивести суму нарахованих відсотків.*/
const deposit = +prompt("What amount you want to put in the bank?");
const month = 2;
const percent = 0.05;
const income =  (deposit * percent / 12 * month).toFixed(2);
alert(`Your income for ${month} month will be ${income}$`)


