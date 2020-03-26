import $ from "jquery";

import shoppingList from "./shopping-list";
import store from "./store";
import item from "./item";

import "./index.css";


const main = function() {
  //fetching from thinkful
  fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
  .then(res => res.json())
  .then(data => console.log(data));





  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
