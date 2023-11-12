import { searchByName } from "./searchByName.js";

const searchInputSection = document.getElementById("searchInputValue");

export const renderFiltersMovies = (searchInput) => {
  searchInputSection.innerHTML = "";
  const filterMovies = searchByName(searchInput);
  if (filterMovies.length > 0) {
    searchInputSection.innerHTML = filterMovies;
  } else {
    return;
  }
};
