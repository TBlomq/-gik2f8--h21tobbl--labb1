const renderPopup = async (id) => {
    await getBook(id).then((books) => {
      let {author, title, coverImage, pages, releaseDate } = books;
      const info = `<div id="bookInformation" class="bg-gradient-to-tr from-indigo-500 to-cyan-300 gap-3  border-indigo-600 z-10  px-4 py-4 flex ">  
        <div> <img class="max-w-fit" src="${coverImage}" alt="${title}" width=120/> </div>
        <div> <p>Title: ${title}</p> <p>Author: ${author}</p> <p>Pages: ${pages}</p> <p>Release date: ${releaseDate}</p> </div>
        </div>`;
      root.insertAdjacentHTML("beforeend", info);
    });
  };