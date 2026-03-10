import { DOM } from "./variables.js";
import { state } from "./store.js";

export function initGallery() {
  fetchImages();
}

async function fetchImages() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=100");
    const data = await response.json();

    state.allImages = data.map((item) => ({
      id: item.id,
      name: item.title,
      url: `https://picsum.photos/seed/${item.id}/400/400`,
    }));

    loadMoreImages();
    setupInfiniteScroll(); 
  } catch (error) {
    console.error("Ошибка загрузки данных API:", error);
  }
}

export function loadMoreImages() {
  const nextBatch = state.allImages.slice(
    state.displayedCount,
    state.displayedCount + state.ITEMS_PER_PAGE
  );

  if (nextBatch.length === 0) return;

  nextBatch.forEach((imgData) => {
    const card = createCard(imgData);
    DOM.imagesList.appendChild(card);
  });

  state.displayedCount += state.ITEMS_PER_PAGE;
}

export function createCard(imgData) {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = imgData.id;
    card.setAttribute("draggable", "true");

    card.innerHTML = `
        <figure class="card-image-wrapper">
            <img src="${imgData.url}" alt="${imgData.name}" loading="lazy">
            <figcaption class="card-title">${imgData.name}</figcaption>
        </figure>
    `;

    card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', imgData.id);
        card.classList.add('dragging');
        DOM.coordsDisplay.classList.add('visible'); 
    });

    card.addEventListener('drag', (e) => {
        if (e.pageX !== 0 && e.pageY !== 0) {
            DOM.coordsDisplay.textContent = `X: ${e.pageX}, Y: ${e.pageY}`;
        }
    });

    card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
        DOM.coordsDisplay.textContent = ""; 
        DOM.coordsDisplay.classList.remove('visible');
    });

    card.addEventListener("click", () => {
        document.querySelectorAll(".card").forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
        window.dispatchEvent(new CustomEvent("imageSelect", { detail: imgData }));
    });

    return card;
}

export function setupInfiniteScroll() {
  if (document.getElementById("sentinel")) return;

  const sentinel = document.createElement("div");
  sentinel.id = "sentinel";
  sentinel.style.height = "10px";
  sentinel.style.width = "100%";
  DOM.imagesList.appendChild(sentinel);

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      
      if (entry.isIntersecting) {
        if (state.displayedCount < state.allImages.length) {
          loadMoreImages();
          DOM.imagesList.appendChild(sentinel);
          DOM.backToTop.classList.remove("visible"); 
        } 
        else if (state.displayedCount >= state.allImages.length) {
          DOM.backToTop.classList.add("visible");
        }
      } else {
        DOM.backToTop.classList.remove("visible");
      }
    },
    {
      root: DOM.gallery,
      threshold: 1.0, 
    }
  );

  observer.observe(sentinel);

  DOM.backToTop.addEventListener("click", () => {
    DOM.gallery.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
