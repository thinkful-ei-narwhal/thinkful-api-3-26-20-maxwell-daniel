const items = [];
const hideCheckedItems = false;
const error = null;

function setError(err) {
  this.error = err;
}

function findById(id) {
  return this.items.find(item => item.id === id);
}

function addItem(item) {
  this.items.push(item);
}

function findAndUpdate(id, newData) {
  const item = this.findById(id);
  Object.assign(item, newData);
}



function findAndDelete(id) {
  this.items = this.items.filter(item => item.id !== id);
}

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems;
}


export default {
  items,
  hideCheckedItems,
  error,
  setError,
  findById,
  addItem,
  findAndDelete,
  toggleCheckedFilter,
  findAndUpdate,
};
