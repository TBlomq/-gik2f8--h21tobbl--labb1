'use strict';

window.addEventListener("load", () => {
  getAll().then((apiBooks) => {
    localStorage.setItem("bookList", JSON.stringify(apiBooks));
  });
});

function renderBookList(bookList) { 
  const existingElement = document.querySelector('.book-list');
  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));

  let listan = document.querySelectorAll(".book-list__item");

  listan.forEach((book) => {
    book.addEventListener("mouseover", (e) => {
      let id;
      if (e.target.input) {
        id = e.target.input.id;
      } else {
        id = e.target.id;
      }
      const bookInformation = document.getElementById("bookInformation");
      if (bookInformation) {
        bookInformation.remove();
      } else {
        renderPopup(id);
      }
      console.log("event", e.target);   
    });
    book.addEventListener("mouseout", () => {
      bookInformation.remove();
    });
  });
}


const searchInput = document.getElementById("searchField");
searchInput.addEventListener("keyup", (e) =>
  renderBookList(
    JSON.parse(localStorage.getItem("bookList")).filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);