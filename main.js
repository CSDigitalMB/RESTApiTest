```js
// handle form submit
const search = (event) => {
  event.preventDefault();
  const value = document.querySelector(".header_form-input").value;

  get_movie(value);
};
