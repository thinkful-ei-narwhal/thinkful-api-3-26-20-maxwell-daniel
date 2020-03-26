const items = [];
const hideCheckedItems = false;

function findById(id) {
  return this.items.find(item => item.id === id);
}

function addItem(item) {
  try {
    this.items.push(item);
  } catch (error) {
    console.log(`Cannot add item: ${error.message}`);
  }
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
  findById,
  addItem,
  findAndDelete,
  toggleCheckedFilter,
  findAndUpdate,
};