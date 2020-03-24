import cuid from 'cuid';

function validateName(name) {
  if (!name) {
    throw new TypeError("Name must not be blank");
  }
}

function create(name) {
  return {
    id: cuid(),
    name,
    checked: false
  }
}

export default {
  validateName,
  create
}
