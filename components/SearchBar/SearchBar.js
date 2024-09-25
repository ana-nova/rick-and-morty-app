      export  function SearchBar(onSubmit) {
            const searchBar = document.createElement("form");
            searchBar.classList.add("search-bar");
            searchBar.innerHTML = `          <input
            name="query"
            class="search-bar__input"
            type="text"
            placeholder="search characters"
            aria-label="character name"
          />
          <button class="search-bar__button" aria-label="search for character">
            <img
              class="search-bar__icon"
              src="assets/magnifying-glass.png"
              alt=""
            />
          </button>`;

          searchBar.addEventListener("submit", onSubmit); 

          return searchBar;
        }


// teil vom ersten teil:

//const searchBar = document.querySelector('[data-js="search-bar"]');

// searchBar.addEventListener("submit", (event) => {
//   event.preventDefault();
//   // const formElements = new formData(searchBar);
//   searchQuery = event.target.elements[0].value;
//   console.log(searchQuery);
//   page = 1;
//   renderCharacters();
// });