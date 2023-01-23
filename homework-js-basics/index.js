// Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
const userName = prompt('What is your name?');
alert(`Hello, ${userName}!`);

// Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
const currentYear = 2023;
const userYear = prompt('What is your birth year?');
const age = currentYear - userYear;
alert(`You're ${age} years old!`);

// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
const side = prompt('Write square side length');
alert(`The perimeter will be ${side * 4} cm`);

// Запитай у користувача радіус кола і виведи площу такої окружності.
const radius = prompt('Write cirle radius');
const Pi = 3.14;
alert(`The area will be ${Pi * radius ** 2} sqr cm`);

/*Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися.
 Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.*/
const distance = prompt('What is distance between cities?');
const time = prompt('How much hours do you expect to spend on your travel?');
const speed = distance / time;
alert(`You need to move ${speed} km per hour`);

/*Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро.
 Курс валют зберігається в константі.*/
const rate = 1.09;
const usd = prompt('Write amount of USD');
alert(`You will receive ${usd / rate} EUR`);
 