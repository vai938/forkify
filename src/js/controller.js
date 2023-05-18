import * as model from './model.js';
import recipeView from './view.js';
import resultView from './resultView.js';
import searchView from './searchView.js';
import paginationView from './paginationView.js';
import bookmarksView from './bookmarksView.js';
import addRecipeView from './addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // Loading the recipe

    resultView.render(model.getSearchResultsPage());
    bookmarksView.render(model.state.bookmark);
    await model.loadRecipe(id);

    //  Rendering the recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError(err);
  }
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    resultView.renderSpinner();
    await model.loadSearchResults(query);
    resultView.render(model.getSearchResultsPage());

    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};
controlSearchResults();
const controlPagination = function (goToPage) {
  resultView.render(model.getSearchResultsPage(goToPage));

  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  model.updateServings(newServings);
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  recipeView.update(model.state.recipe);
  bookmarksView.render(model.state.bookmark);
}
const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmark);
}

const controlAddRecipe = async function (newRecipe) {
  try {
    await model.uploadRecipe(newRecipe);
    recipeView.render(model.state.recipe);

    bookmarksView.render(model.state.bookmark);

    // Change URL state/title/url
    window.history.pushState(null,'',`#${model.state.recipe.id}`)
    
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, 2000);
  } catch (err) {
    console.error(err)
  }
}

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
