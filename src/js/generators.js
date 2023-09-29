export default canIterate();

function canIterate(obj) {
  try {
    return typeof obj[Symbol.iterator] === 'function';
  } catch(e) {
    return false;
  }
}