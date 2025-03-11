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

/* DRAG AND DRPO */

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
