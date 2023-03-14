const _endpoint = "https://swapi.dev/api";
const people = "/people";
const API = {
  PEOPLE: "/people",
  PLANETS: "/planets",
  STARSHIPS: "/starships",
};

const apiCall = fetch(_endpoint + API.PEOPLE);
const textString = "hello world";
const str = new String();
const arr = new Array();
const apiCallPromise = new Promise((resolve, reject) => {
  resolve("We did it!");
  reject("something went wrong");
});

const peopleEndpoint = _endpoint + API.PEOPLE;
const getPlanet = async () => {
  const response = await fetch(peopleEndpoint);
  const result = await response.json();
  return result;
};
