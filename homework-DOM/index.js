const playList = [
  {
    author: "LED ZEPPELIN",

    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",

    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "GUNS AND ROSES",

    song: "WELCOME TO THE JUNGLE",
  },

  {
    author: "DEEP PURPLE",

    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",

    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",

    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",

    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",

    song: "ENTER SANDMAN",
  },
];

const list = document.getElementById("container");
const array = [];

for (let key in playList) {
  array.push(
    `<li>${playList[key].author} is the author of song ${playList[key].song}</li> `
  );
}
list.innerHTML = array;

const cities = [
  "lviv",
  "kyiv",
  "ternopil",
  "rivne",
  "ivano frankivsk",
  "lutsk",
  "uzhgorod",
  "chernivtsi",
  "kherson",
  "kharkiv",
  "odesa",
  "khmelnytskyi",
  "vinnytsia",
  "dnipro",
  "zaporizhia",
  "cherkasy",
  "zhytomyr",
  "mykolaiv",
  "chernihiv",
  "sumy",
  "poltava",
  "donetsk",
  "luhansk",
  "simferopol",
  "kropyvnytskyi",
];
const citiesList = document.getElementById("container2");
const citiesArray = [];
for (let i = 0; i < cities.length; i++) {
  citiesArray.push(`<p>${cities[i]}</p>`);
}
console.log(citiesList);
citiesList.innerHTML = citiesArray;
let a = citiesList.children;
for (let i = 0; i < citiesArray.length; i += 2) {
  a[i].style.color = "white";
  a[i].style.backgroundColor = "blue";
  a[i].style.textAlign = "right";
}
for (let i = 1; i < citiesArray.length; i += 2) {
  a[i].style.color = "black";
  a[i].style.backgroundColor = "pink";
  a[i].style.textAlign = "left";
}

a[0].innerHTML = `<h2>${citiesArray[0]}</h2>`;
a[a.length - 1].innerHTML = `<h2>${citiesArray[citiesArray.length - 1]}</h2>`;
a[0].style.textAlign = "center";
a[a.length - 1].style.textAlign = "center";
