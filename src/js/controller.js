import icons from '../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import recipeView from './views/recipeView';
import * as model from './model.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};
controlRecipe();

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipe));
