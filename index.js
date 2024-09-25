import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1; // changed to let
let page = 1;
const searchQuery = "";

async function fetchCharacters(page) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}` // creation of templateString
    );
    if (!response.ok) {
      throw new Error(`status:${response.status}`);
    }
    const data = await response.json();
    maxPage = data.info.pages; //
    console.log(data);
    return data.results;
  } catch (error) {
    console.log("Error!!!");
  }
}

async function renderCharacters() {
  try {
    const characters = await fetchCharacters(page);

    cardContainer.innerHTML = "";

    characters.forEach((character) => {
      const cardElement = CharacterCard(character);
      cardContainer.append(cardElement);
    });
    // pagination between buttons
    pagination.textContent = `seite ${page} von ${maxPage}`;
  } catch (error) {
    console.log("Wieder Error!!!");
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
