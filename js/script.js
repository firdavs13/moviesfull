"use strict";

let elResult = document.querySelector(".movies__result");
let elList = document.querySelector(".movies__list");
let elModalTitle = document.querySelector(".modal-title");
let elFormSelect = document.querySelector(".form__selct");
let elModalForm = document.querySelector(".movies__form");
let elFormFilmInp = document.querySelector(".search__film");
let elFormFilmRating = document.querySelector(".search__rating");
let elFormSelectNum = document.querySelector(".form__select-num");
let elBookmarkList = document.querySelector(".bookmark__list");

elResult.textContent = movies.length;

// BOOKMARK BUTTON

const renderBookmarks = function (arr, element) {
  arr.forEach(function (item) {
    let newBookmarkItem = document.createElement("li");
    let newBookmarkWrap = document.createElement("div");
    let newBookmarkHeading = document.createElement("h4");
    let newBookmarkRemaveBtn = document.createElement("button");

    newBookmarkItem.setAttribute("class", "bookmark__item");
    newBookmarkWrap.setAttribute("class", "bookmark__wrapper");
    newBookmarkHeading.setAttribute("class", "bookmark__heading");
    newBookmarkRemaveBtn.setAttribute(
      "class",
      "bookmark__delete-btn btn btn-outline-danger btn-sm"
    );

    newBookmarkHeading.textContent = item.title;
    newBookmarkRemaveBtn.textContent = "Delete";

    newBookmarkRemaveBtn.dataset.BookmarkDeleteBtnData = item.title;

    elBookmarkList.appendChild(newBookmarkItem);
    newBookmarkItem.appendChild(newBookmarkWrap);
    newBookmarkWrap.appendChild(newBookmarkHeading);
    newBookmarkWrap.appendChild(newBookmarkRemaveBtn);
  });
};

elList.addEventListener("click", function (evt) {
  if (evt.target.matches(".btn__bookmark")) {
    const bookmarkBtnDataset = evt.target.dataset.bookmarkBtnData;
    const foundFilm = movies.find((film) => film.title == bookmarkBtnDataset);

    if (!bookmarks.includes(foundFilm)) {
      bookmarks.push(foundFilm);
      elBookmarkList.innerHTML = null;
      renderBookmarks(bookmarks, elBookmarkList);

      window.localStorage.setItem("localBookmarks", JSON.stringify(bookmarks));
    }
  }
});

//BOOKMARK DELETE BUTTON

elBookmarkList.addEventListener("click", function (evt) {
  const isBookmarkDeleteBtn = evt.target.matches(".bookmark__delete-btn");

  if (isBookmarkDeleteBtn) {
    const bookmarkDeleteBtnDataset = evt.target.dataset.BookmarkDeleteBtnData;

    const foundFilmIndex = bookmarks.findIndex(
      (bookmark) => bookmark.title == bookmarkDeleteBtnDataset
    );
    bookmarks.splice(foundFilmIndex, 1);

    elBookmarkList.innerHTML = null;

    renderBookmarks(bookmarks, elBookmarkList);
    window.localStorage.setItem("localBookmarks", JSON.stringify(bookmarks));

  }
});

const localBookmarks = JSON.parse(window.localStorage.getItem("localBookmarks"))

let bookmarks = localBookmarks || [];

renderBookmarks(bookmarks, elBookmarkList);


// CATIGORIA

let genersFilm = function (films) {
  let filteredFilm = [];

  films.forEach((film) => {
    film.categories.forEach((categories) => {
      if (!filteredFilm.includes(categories)) {
        filteredFilm.push(categories);
      }
    });
  });

  filteredFilm.forEach((categories) => {
    let newOption = document.createElement("option");

    newOption.value = categories;
    newOption.textContent = categories;

    elFormSelect.appendChild(newOption);
  });
};

genersFilm(movies);

const renderFilm = function (filmArray, element) {
  filmArray.forEach((movie) => {
    //CREATE
    let newItem = document.createElement("li");
    let newCard = document.createElement("div");
    let newImg = document.createElement("img");
    let newCardBody = document.createElement("div");
    let newCardTitle = document.createElement("h4");
    let newCardCatigories = document.createElement("h5");
    let newCardYear = document.createElement("p");
    let newCardRating = document.createElement("p");
    let newCardIcon = document.createElement("p");
    let newCardSortIcon = document.createElement("p");
    let newCardIconTwo = document.createElement("p");
    let newCardBtnWatch = document.createElement("a");
    let newCardBtnMore = document.createElement("button");
    let newCardBtnBook = document.createElement("button");
    let newCardBtnWrap = document.createElement("div");
    let newCardModal = document.createElement("div");
    let newCardDialog = document.createElement("div");
    let newCardContent = document.createElement("div");
    let newCardHeader = document.createElement("div");
    let newCardHeaderTitle = document.createElement("h5");
    let newCardHeaderBtn = document.createElement("button");
    let newCardModalBody = document.createElement("div");
    let newCardFooter = document.createElement("div");
    let newCardFooterBtn = document.createElement("button");

    //SET ATTRIBUTE
    newItem.setAttribute("class", "movies__item");
    newCard.setAttribute("class", "card");
    newImg.setAttribute("class", "card-img-top");
    newImg.setAttribute("src", movie.smallThumbnail);
    newCardBody.setAttribute("class", "card-body");
    newCardTitle.setAttribute("class", "card-title");
    newCardCatigories.setAttribute("class", "card-catigories");
    newCardYear.setAttribute("class", "card-text");
    newCardRating.setAttribute("class", "card-text");
    newCardIcon.setAttribute("class", "year__icon");
    newCardIconTwo.setAttribute("class", "year__icon");
    newCardSortIcon.setAttribute("class", "sort__icon");
    newCardBtnWatch.setAttribute("class", "btn btn-outline-primary");
    newCardBtnMore.setAttribute("class", "btn btn-outline-info btn__more");
    newCardBtnBook.setAttribute(
      "class",
      "btn btn-outline-danger btn__bookmark"
    );
    newCardBtnWrap.setAttribute("class", "btn__wrap");
    newCardBtnWatch.setAttribute(
      "href",
      `https://www.youtube.com/watch?v=${movie.youtubeId}`
    );
    newCardBtnMore.setAttribute("data-bs-toggle", "modal");
    newCardBtnMore.setAttribute("data-bs-target", "#exampleModal");
    newCardModal.setAttribute("class", "modal fade");
    newCardModal.setAttribute("id", "exampleModal");
    newCardModal.setAttribute("tabindex", "-1");
    newCardModal.setAttribute("aria-labelledby", "exampleModalLabel");
    newCardModal.setAttribute("aria-hidden", "true");
    newCardDialog.setAttribute("class", "modal-dialog");
    newCardContent.setAttribute("class", "modal-content");
    newCardHeader.setAttribute("class", "modal-header");
    newCardHeaderTitle.setAttribute("class", "modal-title");
    newCardHeaderTitle.setAttribute("id", "exampleModalLabel");
    newCardHeaderBtn.setAttribute("type", "button");
    newCardHeaderBtn.setAttribute("class", "btn-close");
    newCardHeaderBtn.setAttribute("data-bs-dismiss", "modal");
    newCardHeaderBtn.setAttribute("aria-labe", "Close");
    newCardModalBody.setAttribute("class", "modal-body");
    newCardFooter.setAttribute("class", "modal-footer");
    newCardFooterBtn.setAttribute("type", "button");
    newCardFooterBtn.setAttribute("class", "btn btn-secondary");
    newCardFooterBtn.setAttribute("data-bs-dismiss", "modal");

    //TEXT CONTENT
    newCardTitle.textContent = movie.title;
    newCardYear.textContent = movie.year;
    newCardRating.textContent = movie.imdbRating;
    newCardIcon.textContent = "📅 :";
    newCardIconTwo.textContent = "⭐ :";
    newCardSortIcon.textContent = "🎭 :  ";
    newCardBtnWatch.textContent = "Watch trailer";
    newCardBtnMore.textContent = "More Info";
    newCardBtnBook.textContent = "Bookmark";
    newCardFooterBtn.textContent = "Close";
    newCardCatigories.textContent = movie.categories.join(",   ");

    // DATASET

    newCardBtnBook.dataset.bookmarkBtnData = movie.title;
    newCardBtnMore.dataset.moreBtnData = movie.title;

    // MORE BUTTON

    elList.addEventListener("click", function (evt) {
      if (evt.target.matches(".btn__more")) {
        const moreBtnDataset = evt.target.dataset.moreBtnData;
        const founFilmTitle = movies.find(
          (film) => film.title == moreBtnDataset
        );

        console.log(founFilmTitle);

        newCardHeaderTitle.textContent = founFilmTitle.title;
        newCardModalBody.textContent = founFilmTitle.summary;
        renderFilm(genaratorFilm, elList);
      }
    });

    //APPEND
    element.appendChild(newItem);
    newItem.appendChild(newCard);
    newCard.appendChild(newImg);
    newCard.appendChild(newCardBody);
    newCardBody.appendChild(newCardTitle);
    newCardBody.appendChild(newCardYear);
    newCardBody.appendChild(newCardRating);
    newCardBody.appendChild(newCardCatigories);
    newCardYear.appendChild(newCardIcon);
    newCardRating.appendChild(newCardIconTwo);
    newCardBody.appendChild(newCardBtnWrap);
    newCardBtnWrap.appendChild(newCardBtnWatch);
    newCardBtnWrap.appendChild(newCardBtnMore);
    newCardBtnWrap.appendChild(newCardBtnBook);
    element.appendChild(newCardModal);
    newCardModal.appendChild(newCardDialog);
    newCardDialog.appendChild(newCardContent);
    newCardContent.appendChild(newCardHeader);
    newCardCatigories.appendChild(newCardSortIcon);
    newCardHeader.appendChild(newCardHeaderTitle);
    newCardHeader.appendChild(newCardHeaderBtn);
    newCardContent.appendChild(newCardModalBody);
    newCardContent.appendChild(newCardFooter);
    newCardFooter.appendChild(newCardFooterBtn);
  });
};

renderFilm(movies, elList);

elModalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let selectValue = elFormSelect.value;
  let genaratorFilm = [];

  movies.forEach((film) => {
    film.categories.forEach((catigorie) => {
      if (catigorie == selectValue) {
        genaratorFilm.push(film);
      }
    });
  });

  elList.innerHTML = null;

  if (selectValue == "all") {
    renderFilm(movies, elList);
    elResult.textContent = movies.length;
  } else {
    renderFilm(genaratorFilm, elList);
    elResult.textContent = genaratorFilm.length;
  }
});

// elModalForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   let filmInpValue = elFormFilmInp.value;

//   let filtersdFilm = [];

//   movies.forEach((film) => {
//     if(film.title.includes(filmInpValue)){
//       filtersdFilm.push(film)
//     }
//   });

//   elList.innerHTML = null;
//   elFormFilmInp.value = null;

//   renderFilm(filtersdFilm, elList);
//   elResult.textContent = filtersdFilm.length;
// });

// elModalForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   let filmRatingSearch = Number(elFormFilmRating.value);

//   let filterRating = [];

//   movies.forEach((film) => {
//     if (filmRatingSearch === film.imdbRating) {
//       filterRating.push(film);
//     }
//   });

//   elList.innerHTML = null;
//   elFormFilmRating.value = null;

//   renderFilm(filterRating, elList);
//   elResult.textContent = filterRating.length;
// });
