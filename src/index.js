import $ from "jquery";
import api from "./api";
import shoppingList from "./shopping-list";
import store from "./store";


import "./index.css";


const main = function() {

  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
