import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { SearchBar } from "./components/SearchBar/SearchBar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

//const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1; // changed to let
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}` // &name=<searchQuery> // creation of templateString
    );
    if (!response.ok) {
      throw new Error(`status for API: ${response.status}`);
    }
    const data = await response.json();
    maxPage = data.info.pages;
    return data.results;
  } catch (error) {
    console.log(`Error, status: ${error.message}`);
  }
}

async function renderCharacters() {
  try {
    const characters = await fetchCharacters();

    cardContainer.innerHTML = "";

    characters.forEach((character) => {
      const cardElement = CharacterCard(character);
      cardContainer.append(cardElement);
    });
    // pagination between buttons
    pagination.textContent = `seite ${page} von ${maxPage}`;
  } catch (error) {
    console.log(`Character not found: ${error.message}`);
  }
}

//addevent button-next
nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++; // each click adds +1
    renderCharacters();
  }
});

// addvent button-prev
prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--; // clicks -1
    renderCharacters();
  }
});

renderCharacters();

// search teil:
const searchBar = SearchBar((event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  page = 1;
  renderCharacters();
});

searchBarContainer.append(searchBar);
