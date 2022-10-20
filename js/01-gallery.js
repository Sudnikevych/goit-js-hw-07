import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const newGallery = galleryItems
  .map(
    (items) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${items.original}">
        <img
            class="gallery__image"
            src="${items.preview}"
            data-source="${items.original}"
            alt="${items.description}"
        />
    </a>
</div>`
  )
  .join("");

gallery.innerHTML = newGallery;

const addClickImg = (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const sampl = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  );
  sampl.show();

  gallery.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      sampl.close();
    }
  });
};

gallery.addEventListener("click", addClickImg);
