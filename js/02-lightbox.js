import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryImg = galleryItems
  .map(
    (items) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${items.original}">
        <img
            class="gallery__image"
            src="${items.preview}"
            alt="${items.description}"
        />
    </a>
</div>`
  )
  .join("");

gallery.innerHTML = galleryImg;

const lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionDelay: 250,
  captionsData: "alt",
});

lightbox.on("show.simplelightbox");
