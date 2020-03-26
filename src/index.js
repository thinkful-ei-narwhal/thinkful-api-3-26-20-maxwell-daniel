import $ from "jquery";
import api from "./api";
import shoppingList from "./shopping-list";
import store from "./store";
import item from "./item";

import "./index.css";


const main = function() {
  api.getItems()
  .then(res => console.log(res));

  //fetching from thinkful
  fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
  .then(res => res.json())
  .then(data => console.log(data));





  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
