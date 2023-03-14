const apiKey = "91f2caf9";
const searchForm = document.querySelector("form");
const searchInput = document.querySelector("#search-input");
const typeSelect = document.querySelector("#type-select");
const resultsContainer = document.querySelector("#results-container");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const currentPage = document.querySelector("#current-page");
const detailsModal = document.getElementById("details-modal");
const detailsContainer = document.getElementById("details-container");
const closeDetailsButton = document.getElementsByClassName("close")[0];
let pageNumber = 1;

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value;
  const searchType = typeSelect.value;
  pageNumber = 1;

  fetchResults(searchTerm, searchType, pageNumber);
});

prevButton.addEventListener("click", () => {
  if (pageNumber > 1) {
    pageNumber--;
    const searchTerm = searchInput.value;
    const searchType = typeSelect.value;
    fetchResults(searchTerm, searchType, pageNumber);
  }
});

nextButton.addEventListener("click", () => {
  pageNumber++;
  const searchTerm = searchInput.value;
  const searchType = typeSelect.value;
  fetchResults(searchTerm, searchType, pageNumber);
});

function fetchResults(searchTerm, searchType, pageNumber) {
  fetch(
    `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&type=${searchType}&page=${pageNumber}`
  )
    .then((response) => response.json())
    .then((data) => {
      displayResults(data.Search);
      updatePagination(data.totalResults);
    })
    .catch((error) => console.error(error));
}

function displayResults(results) {
  resultsContainer.innerHTML = "";

  if (!results || results.length === 0) {
    resultsContainer.textContent = "No results found.";
    return;
  }

  const resultList = document.createElement("ul");
  resultList.classList.add("results-list");
  results.forEach((result) => {
    const resultItem = document.createElement("li");
    resultItem.classList.add("result-item");
    const resultLink = document.createElement("a");
    resultLink.href = `https://www.imdb.com/title/${result.imdbID}`;
    resultLink.target = "_blank";
    resultLink.textContent = result.Title;
    resultItem.appendChild(resultLink);
    resultList.appendChild(resultItem);
  });
  resultsContainer.appendChild(resultList);
}

function updatePagination(totalResults) {
  const totalPages = Math.ceil(totalResults / 10);
  currentPage.textContent = `Page ${pageNumber} of ${totalPages}`;

  if (totalPages === 1) {
    prevButton.style.display = "none";
    nextButton.style.display = "none";
  } else if (pageNumber === 1) {
    prevButton.style.display = "none";
    nextButton.style.display = "block";
  } else if (pageNumber === totalPages) {
    prevButton.style.display = "block";
    nextButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
    nextButton.style.display = "block";
  }
}
