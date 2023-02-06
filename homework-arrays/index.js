/*Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, 
кількість і куплений він чи ні, ціну за одиницю товару, сума.*/

const productList = [
    { name: 'chocolate', quantity: 1, price: 50, get sum() { return this.quantity * this.price }, bought:false,},
    {name: 'bread', quantity:1, price:10, get sum() { return this.quantity * this.price }, bought:true,},
    {name: 'banana', quantity:2, price:15, get sum() { return this.quantity * this.price }, bought:false,},
    {name: 'chicken', quantity:2, price:25, get sum() { return this.quantity * this.price },  bought:true,},
    {name: 'carrots', quantity:3, price:13, get sum() { return this.quantity * this.price },  bought:true,},
    {name: 'sausages', quantity:4, price:15, get sum() { return this.quantity * this.price },  bought:false,},
    {name: 'water', quantity:6, price:5, get sum() { return this.quantity * this.price },  bought:false,}
]
console.log('original', productList);


/* Виводити весь список на екран таким чином, щоб спочатку йшли продукти,
 що ще не придбані, а потім - ті, що вже придбали.*/

function showList() {
    const notBoughtList = productList.filter(item => item.bought === false);
    const boughtList = productList.filter(item => item.bought === true);
    return notBoughtList.concat(boughtList)
}


// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
const buyProduct = (item) => {
    if (typeof item === 'string') {
        let newProductList = productList.map(x => x);
        const listItem = newProductList.find(a => a.name === item);
        listItem.bought = true;
        return newProductList;
    } else {
        return 'invalid input'
    }

}


// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
function deleteProduct(item) {
    if (typeof item === 'string') {
        const newProductList = productList.filter(element => element.name !== item);
        return newProductList;
    } else {
        return 'invalid input'
    }
    
}


/*Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом,
 необхідно збільшувати кількість в існуючій покупці, а не додавати нову. 
При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, 
а кількості товарів стало 2, то сума буде 24. */

const addProduct = (name, quantity, price) => {
    if (typeof name !== 'string' || typeof quantity !== 'number' || typeof price !== 'number' || isNaN(quantity) || isNaN(price)) {
        return 'invalid input';
    } else {
        const newItem = {
            name,
            quantity,
            price,
            get sum() { return this.quantity * this.price },
            bought:false,
        }
        if (productList.map(item => item.name).includes(newItem.name)) {
            for (let i = 0; i < productList.length; i++){
                if (productList[i].name === newItem.name) {
                    productList[i].quantity+=newItem.quantity;
                    productList[i].bought = false;
            }
            }
        } else {
            productList.push(newItem);
        }
        return productList;
    }

}


// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
const calculateSum = () => {
    let totalSum = 0;
    for (let i = 0; i < productList.length;i++) {
        totalSum += productList[i].sum;
    }
    return `Total sum of all products is ${totalSum}`
}


// Підрахунок суми всіх (не) придбаних продуктів.
const calculateBought = () => {
    let notBoughtSum = 0;
    let boughtSum = 0;
    for (let i = 0; i < productList.length; i++){
        if (productList[i].bought === false) {
            notBoughtSum += productList[i].sum;
        } else {
            boughtSum += productList[i].sum;
        }
    }
    return `Total sum of bought products is ${boughtSum} and sum of not bought is ${notBoughtSum}`
}


/*Показання продуктів в залежності від суми, 
(від більшого до меншого / від меншого до більшого, 
в залежності від параметра функції, який вона приймає) */
function sortingProducts(option) {
    let productSum = []
    if (option === 'expensive') {
        productSum = productList.sort(function(a, b){return b.sum-a.sum})
    } else if (option === 'cheap') {
        productSum = productList.sort(function (a, b) { return a.sum - b.sum })
    }
    else {
        return 'invalid input';
    }
    return productSum;
}
