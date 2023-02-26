function loadFromLocalStorage() {
  const data = localStorage.getItem('myData');
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
}
  export default loadFromLocalStorage