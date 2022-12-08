const BookListItem = (book) => {
  let html = `<li 
                class="book-list__item last:border-b-0 border-b border-indigo-700 mb-2 mx-2 last:mb-0 p-3 text-black-900" id=${book.id}>
              ${book.author} - ${book.title}    
              </li>`;
  return html;
};
