
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/max-daniel';

const getItems = function() {
  const options = {method: 'GET'}; 
  return fetch(`${BASE_URL}/items`, options);
};

const createItem = function(name) {
  console.log(name);
  const newItem = JSON.stringify({name});
  
  console.log(newItem);

  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: newItem
  };
  return fetch(`${BASE_URL}/items`, options);
};

export default {
  getItems,
  createItem
};