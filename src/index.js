import $ from "jquery";
import api from "./api";
import shoppingList from "./shopping-list";
import store from "./store";


import "./index.css";


const main = function() {

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });


  // api.getItems()
  //   .then(res => res.json())
  //   .then(responseJSONObj => console.log(responseJSONObj));



  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
