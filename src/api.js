
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/max-daniel';

const apiFetch = function(...args) {
  let error;
  return fetch(...args)
    .then(res => {
      if (!res.ok) {
        error = { code: res.status};
      }
      return res.json();
    })
    .then(data => {
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    });
};

const getItems = function() {
  return apiFetch(`${BASE_URL}/items`);
};

const updateItem = function (id, updateData){
  const specialKeys = JSON.stringify(updateData);
  const options = {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: specialKeys
  };
  return apiFetch(`${BASE_URL}/items/${id}`, options);
};

const createItem = function(name) {
  const newItem = JSON.stringify({name});

  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: newItem
  };
  return apiFetch(`${BASE_URL}/items`, options);
};

const deleteItem = function(id) {
  const options = {
    method: 'DELETE',
  };
  return apiFetch(`${BASE_URL}/items/${id}`, options);
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};