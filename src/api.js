
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/max-daniel';

function getItems() {
  const options = {method: 'GET'}; 
  return fetch(`${BASE_URL}/items`, options);
}



export default {
  getItems
};