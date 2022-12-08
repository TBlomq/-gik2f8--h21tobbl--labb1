const BookList = (bookList) => {
  let html = `<ul class="book-list w-full mx-auto rounded-md border-2 border-indigo-600 bg-white ">`;
  for (let i = 0; i < bookList.length; i++) {
    html += BookListItem(bookList[i]);
  }
  html += `</ul>`;
  return html;
};

