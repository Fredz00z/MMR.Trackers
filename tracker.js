tippy("#South-Wall", {
  content: "South Wall",
  placement: "bottom",
  duration: 0,
});
/* TRACKER-ITEM TOGGLE */
const itemsEls = document
  .querySelector(".tracker-container")
  .querySelectorAll("img");

itemsEls.forEach((itemEl) => {
  itemEl.addEventListener("click", () => {
    if (itemEl.style.filter === "none") {
      itemEl.style.filter = "grayscale(1)";
    } else itemEl.style.filter = "none";
  });
});
/* RIGHT CLICK EVENT

itemsEls.forEach((itemEl) => {
  itemEl.addEventListener("contextmenu", () => {
    if (itemEl.style.filter === "none") {
      itemEl.style.filter = "grayscale(1)";
    } else itemEl.style.filter = "none";
  });
  itemEl.addEventListener("contextmenu", (e) => e.preventDefault());
});
*/

/* DRAG AND DROP */
const boxes = document.querySelectorAll(".box");
const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  img.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.src);
  });
});

boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  box.addEventListener("drop", (e) => {
    e.preventDefault();
    const imgData = e.dataTransfer.getData("text/plain");
    const newImg = document.createElement("img");
    newImg.src = imgData;
    box.innerHTML = "";
    box.appendChild(newImg);
    newImg.classList.add("item");
  });
});

/*SHOP-SANITY TOGGLE */
const shopFull = document.querySelector(".shop-full");
const shopLate = document.querySelector(".shop-late");
const swapBtns = document.querySelectorAll(".swap-btn");
swapBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (shopLate.style.display === "grid") {
      shopLate.style.display = "none";
      shopFull.style.display = "grid";
    } else {
      shopLate.style.display = "grid";
      shopFull.style.display = "none";
    }
  });
});

/*RUPEE-SANITY TOGGLE */
const redRupees = document.querySelector(".red-wrapper");
const blueRupees = document.querySelector(".blue-wrapper");
const greenRupees = document.querySelector(".green-wrapper");

const rupeeBtns = document
  .querySelector(".rupee-titles")
  .querySelectorAll("button");
rupeeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "red-btn") {
      redRupees.style.display = "block";
      blueRupees.style.display = "none";
      greenRupees.style.display = "none";
    } else if (btn.id === "blue-btn") {
      redRupees.style.display = "none";
      blueRupees.style.display = "block";
      greenRupees.style.display = "none";
    } else {
      redRupees.style.display = "none";
      blueRupees.style.display = "none";
      greenRupees.style.display = "block";
    }
  });
});

/* Auto-complete */

let keywords = [
  "Clock Town",
  "South Clock Town",
  "SCT",
  "West Clock Town",
  "WCT",
  "North Clock Town",
  "NCT",
  "East Clock Town",
  "ECT",
  "Termina Field",
  "Road to Swamp",
  "Swamp",
  "Woodfall Temple",
  "WFT",
  "Snowhead Temple",
  "SHT",
  "Great Bay Temple ",
  "GBT",
  "Stone Tower",
  "Stone Tower Temple",
  "STT",
];

let sortedKeywords = keywords.sort();
let inputEl = document.getElementById("input");

function createKeywordList(keywords) {
  const listEl = document.createElement("ul");
  listEl.className = "autocomplete-list";
  document.querySelector(".notes-container").appendChild(listEl);
  keywords.forEach((word) => {
    const listItem = document.createElement("li");
    const keyButton = document.createElement("button");
    keyButton.innerHTML = word;
    listItem.appendChild(keyButton);
    listEl.appendChild(listItem);
    inputEl.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        inputEl.value = keyButton.innerHTML;
        removeKeywordList();
      }
    });
  });
}

function removeKeywordList() {
  const listEl = document.querySelector(".autocomplete-list");
  if (listEl) listEl.remove();
}

function onInputChange() {
  removeKeywordList();

  const typedWord = inputEl.value.toLowerCase();

  if (typedWord.length === 0) return;

  const filteredWords = [];

  sortedKeywords.forEach((word) => {
    if (word.substring(0, typedWord.length).toLowerCase() === typedWord)
      filteredWords.push(word);
  });

  createKeywordList(filteredWords);
}

inputEl.addEventListener("input", onInputChange);

/* auto-complete test

let keywords = ["Great Bay Temple ", "GBT", "Snowhead Temple", "SHT"];

let sortedKeywords = keywords.sort();
let inputEl = document.getElementById("input");

function createKeywordList(keywords) {
  const listEl = document.createElement("ul");
  listEl.className = "autocomplete-list";

  document.querySelector(".notes-container").appendChild(listEl);

  keywords.forEach((word) => {
    const listItem = document.createElement("li");
    const keyButton = document.createElement("button");
    keyButton.addEventListener("click", onKeywordClick);
    keyButton.innerHTML = word;
    listItem.appendChild(keyButton);
    listEl.appendChild(listItem);
  });
}

function onKeywordClick(e) {
  e.preventDefault();
  const buttonEl = e.target;
  inputEl.value = buttonEl.innerHTML;
  document.getElementById("input").focus();
  removeKeywordList();
}

function removeKeywordList() {
  const listEl = document.querySelector(".autocomplete-list");
  if (listEl) listEl.remove();
}

function onInputChange() {
  removeKeywordList();

  const typedWord = inputEl.value.toLowerCase();

  if (typedWord.length === 0) return;

  const filteredWords = [];

  sortedKeywords.forEach((word) => {
    if (word.substring(0, typedWord.length).toLowerCase() === typedWord)
      filteredWords.push(word);
  });

  createKeywordList(filteredWords);
}

inputEl.addEventListener("input", onInputChange);

*/
