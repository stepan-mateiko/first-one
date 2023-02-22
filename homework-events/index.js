/*Створити HTML-сторінку для відображення/редагування тексту.
 При відкритті сторінки текст відображається за допомогою тега div.
  При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом,
   який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом.
 Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.*/
const div = document.getElementById("div");
const container = document.createElement("div");
div.appendChild(container);
container.innerText = "This text can be edited";
const area = document.createElement("textarea");

container.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.code === keyE) {
    event.preventDefault();
    area.innerText = container.innerText;
    container.parentNode.replaceChild(area, container);
  }
});
area.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.code === keyS) {
    event.preventDefault();
    container.innerText = area.value;
    area.parentNode.replaceChild(container, area);
  }
});

/*Створити HTML-сторінку з великою таблицею. 
При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. 
Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.*/

document.addEventListener("DOMContentLoaded", function () {
  // отримання елементів
  const table = document.getElementById("table");
  const ths = table.getElementsByTagName("th");

  // перетворення тексту в числа
  function convertToNumber(str) {
    if (!isNaN(str)) {
      return parseFloat(str);
    }
    return str;
  }

  // сортування таблиці
  function sortTable(column) {
    const rows = table.rows;
    const arr = [];

    // заповнення масиву з даними з таблиці
    for (let i = 1; i < rows.length; i++) {
      let row = rows[i];
      let cell = row.cells[column];
      let value = cell.innerText || cell.textContent;
      arr.push({
        row: row,
        value: convertToNumber(value),
      });
    }

    // сортування масиву
    arr.sort(function (a, b) {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });

    // переставлення рядків в таблиці
    for (let i = 0; i < arr.length; i++) {
      table.tBodies[0].appendChild(arr[i].row);
    }
  }

  // додавання обробника кліку до заголовків стовпців
  for (let i = 0; i < ths.length; i++) {
    ths[i].addEventListener(
      "click",
      (function (column) {
        return function () {
          sortTable(column);
        };
      })(i)
    );
  }
});
