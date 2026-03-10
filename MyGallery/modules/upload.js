import { DOM } from './variables.js';
import { state } from './store.js';
import { createCard } from './gallery.js';

export function initUpload() {
    DOM.imageForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = DOM.imageNameInput.value.trim();
        const file = DOM.imageFileInput.files[0];

        if (!name && !file) {
            alert("Error: Please enter an image name and select a file!");
            return;
        }

        if (!name) {
            alert("Error: Please enter an image name!");
            DOM.imageNameInput.focus(); 
            return;
        }

        if (!file) {
            alert("Error: Please select a file to upload!");
            return;
        }

        const reader = new FileReader();

        reader.onload = (event) => {
            const newImage = {
                id: Date.now(),
                name: name,
                url: event.target.result
            };

            state.allImages.unshift(newImage);
            
            const card = createCard(newImage);
            DOM.imagesList.prepend(card);
            
            state.displayedCount++;

            DOM.imageForm.reset();
            console.log("Image successfully added");
        };

        reader.readAsDataURL(file);
    });
}