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
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  return data.results;
}

async function renderCharacters() {
  const characters = await fetchCharacters();

  cardContainer.innerHTML = "";

  characters.forEach((character) => {
    const cardElement = CharacterCard(character);
    cardContainer.append(cardElement);
  });
}

renderCharacters();
