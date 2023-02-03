// Напиши всі можливі варіанти створення функцій.
function sumArr1(a, b) {
    return a + b;
}
const sumArr2 = function (a, b) {
    return a + b;
}
const sumArr3 = (a, b) => a + b;
console.log(sumArr1(2, 3), sumArr2(2, 3), sumArr3(2, 3));

// Створи функцію, яка буде виводити кількість переданих їй аргументів.
function calculateArguments() {
    return arguments.length
}
console.log(calculateArguments(3, 5, 6));

/*Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.*/
const checkTwoNumbers = (a, b) => {
    if ((typeof a === 'number' && !isNaN(a)) && (typeof b === 'number' && !isNaN(b))) {
        if (a > b) {
            return 1;
        }
        else if (a < b) {
            return -1;
        }
        else {
            return 0;
        }
    }
    else {
        return 'invalid input'
    }
}
console.log(checkTwoNumbers(4, 3));

// Напиши функцію, яка обчислює факторіал переданого їй числа.
function calculateFactorial(a) {
    if (typeof a === 'number' && !isNaN(a)) {
        if (a === 0 || a === 1) {
            return 1;
        }
        for (var i = a - 1; i >= 1; i--) {
            a *= i;
        }
        return a;
    }
    else {
        return 'invalid input'
    }

}
console.log(calculateFactorial(5));

/*Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/
const makeThreeDigits = (a, b, c) => {
    if ((typeof a === 'number' && !isNaN(a)) && (typeof b === 'number' && !isNaN(b))&&(typeof c === 'number' && !isNaN(c))) {
        return +(String(Math.abs(a)) + String(Math.abs(b)) + String(Math.abs(c)));
    }
    else {
        return 'invalid input';
    }
}

console.log(makeThreeDigits(1, 4, 9));

/*Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
 Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/
function calculateArea(a, b=a) {
    if (arguments.length > 2) {
         return 'invalid input'
    }
    else if((typeof a === 'number' && !isNaN(a)) && (typeof b === 'number' && !isNaN(b))){
        return a * b;
    }
    else {
        return 'invalid input';
    }
}

console.log(calculateArea(2, 3));


 /*write function that base on year of birth  received will return age,
// the year must be different each time i call the functiomn
// 1. check if correct argument is provided
// 2. check if argument is provided
// 3. for person older than 150 years return message irrelevnt number
// 4. if all good return message your age is ....*/
function checkAge(currentYear) {
    return function (yearOfBirth) {
        const age = currentYear - yearOfBirth;
        if (typeof yearOfBirth !== 'number' || isNaN(yearOfBirth)) {
            return 'invalid input';
        }
        else if (age < 0 || age > 150) {
            return 'irrelevant number';            
        }
        else {
            return `Your age is ${age} years`;
        }
    }
}
const year2000 = checkAge(2000);
const year2015 = checkAge(2015);
const year2023 = checkAge(2023);
console.log(year2000(+prompt('What year you were born?')));
console.log(year2015(+prompt('What year you were born?')));
console.log(year2023(+prompt('What year you were born?')));
