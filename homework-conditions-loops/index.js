/* Запитай у користувача його вік і визначи, ким він є: дитиною (0-11),
 підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
*/
const userAge = +prompt('Write your age, please');
switch (true) {
    case userAge > 0 && userAge <= 11:
        console.log('You are child');
        break;
    case userAge > 11 && userAge <= 17:
        console.log('You are teenager');
        break;
    case userAge > 17 && userAge <= 59:
        console.log('You are adult');
        break;
    case userAge > 59:
        console.log('You are retired person');
        break;
    default:
        console.log('Wrong input');
}


/* Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, 
який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
*/
const key = prompt('Press key from 0 to 9');
switch (key) {
    case '1':
        console.log('!');
        break;
    case '2':
        console.log('@');
        break;
    case '3':
        console.log('#');
        break;
    case '4':
        console.log('$');
        break;
    case '5':
        console.log('%');
        break;
    case '6':
        console.log('^');
        break;
    case '7':
        console.log('&');
        break;
    case '8':
        console.log('*');
        break;
    case '9':
        console.log('(');
        break;
    case '0':
        console.log(')');
        break;
    default:
        console.log("Wrong input");
}


// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const startSum = +prompt('Enter start number of the range');
const endSum = +prompt('Enter end number of the range');
let counterSum=0;
for (let i = startSum; i <= endSum; i++){
    counterSum +=i;
}
console.log(counterSum);


/* Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; від 300 до 500 - 5%; від 500 і вище - 7%.*/
const goodsPrice = +prompt('What is the price of your purchase?');
let finalPrice = goodsPrice;
if (goodsPrice > 200 && goodsPrice < 300) {
    finalPrice += finalPrice * 0.03;
} else if (goodsPrice >= 300 && goodsPrice < 500) {
        finalPrice += finalPrice * 0.05;
} else if(goodsPrice>=500){
        finalPrice += finalPrice * 0.07;
}
console.log(finalPrice);


/* Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.
 При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. 
 Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
*/
const myArray = [4, -3, 8, 15, 0, -73, 16, -69, 23, 42];
let positiveCounter=0;
let negativeCounter=0;
let zeroCounter=0;
let evenCounter=0;
let oddCounter=0;
for (let i = 0; i < myArray.length; i++){
    myArray[i] % 2 === 0 ? evenCounter++ : oddCounter++;
    switch (true) {
        case myArray[i] > 0:
            positiveCounter++;
            break;
        case myArray[i] < 0:
            negativeCounter++;
            break;
        default:
            zeroCounter++;
    }
}
console.log(`There are ${positiveCounter} positive, ${negativeCounter} negative, ${zeroCounter} zero, ${evenCounter} even and ${oddCounter} odd`);

/* Зацикли відображення днів тижня таким чином: «День тижня.Хочеш побачити наступний день ? »
 і так до тих пір, поки користувач натискає OK.
*/

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let a;
do {
    for (let i = 0; i < weekDays.length; i++) {
        a = confirm(`It is ${weekDays[i]}, want to see next one?`)
        if (a === false) break;
    }
} while (a === true);
    

/* Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його 
наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N 
і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, 
зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач
 вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки 
 користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
*/
const arr = [0, 100];
let divider = 50;
let correct;
while(typeof correct==='undefined'){
    let guess = confirm(`Is ${arr[1]-divider} your number?`)
    if (guess) {
        correct = arr[1] - divider;
        console.log(`Your number is ${correct}`)
    }
    else {
        let higher = confirm(`Okay, then is your number higher than ${arr[1]-divider}?`)
        if (higher){
            arr[0] = arr[1] - divider;
            arr[1] = arr[0] + divider;
        }
        else{
            arr[1] = arr[1] - divider;
            arr[0] = arr[1] - divider;
        }
    }
    divider = Math.floor(divider / 2);
    if (divider === 0) {
        divider = 1;
    }
}




/* Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно
//  помножити на числа від 1 до 10. */
for (let i = 2; i <= 9; i++){
    for (let j = 1; j <= 10; j++){
        let mult = i * j;
        console.log(`${i}x${j}=${mult}`);
    }
    console.log('\n');
}

/* Запитай дату (день, місяць, рік) і виведи наступну за нею дату. 
Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.*/
const userDate = +prompt('Enter date');
const userMonth = +prompt('Enter month');
const userYear = +prompt('Enter year ');
let finalDate;
let finalMonth;
let finalYear;

if (userMonth === 2) {
    finalYear = userYear;
    finalMonth = userMonth;
    switch (true) {
        case userDate < 27 && userDate > 0:
            finalDate = userDate + 1;
            break;
        case userDate === 28 && (userYear % 4 === 0 && userYear % 100 !== 0):
            finalDate = userDate + 1;
            break;
        case userDate === 29 && (userYear % 4 !== 0 || userYear % 100 === 0):
            finalDate='invalid'
            break;
        case userDate === 28 || userDate === 29:
            finalDate = 1;
            finalMonth = userMonth + 1;
            break;
        default:
            finalDate='invalid'
    }
}
else if (userMonth === 4 || userMonth === 6 || userMonth === 9 || userMonth === 11) {
    finalYear = userYear;
    finalMonth = userMonth;
    switch (true) {
        case userDate < 30 && userDate>0:
            finalDate = userDate + 1;
            break;
        case userDate === 30:
            finalDate = 1;
            finalMonth = userMonth + 1;
            break;
        default:
            finalDate = 'invalid';
    }
}
else if (userDate === 31 && userMonth === 12) {
    finalDate = 1;
    finalMonth = 1;
    finalYear = userYear + 1;
}
else {
    finalYear = userYear;
    finalMonth = userMonth;
    switch (true) {
        case userDate < 31 && userDate>0:
            finalDate = userDate + 1;
            break;
        case userDate === 31:
            finalDate = 1;
            finalMonth = userMonth + 1;
            break;
        default:
            finalDate = 'invalid';
    }
}
if (userMonth > 12 || userMonth < 1) {
    finalDate = 'invalid';
}
if (typeof finalDate !== 'invalid' && finalDate < 10) {
    finalDate = `0${finalDate}`;
}
if (finalMonth < 10) {
    finalMonth = `0${finalMonth}`;
}
const dateResult=(finalDate==='invalid')? 'Invalid input': `${finalDate}.${finalMonth}.${finalYear}`
console.log(dateResult);