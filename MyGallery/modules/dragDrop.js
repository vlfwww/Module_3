import { DOM } from './variables.js';

export function initDragDrop() {
    const dropZone = DOM.preview;

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over'); 
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');

        const imageId = e.dataTransfer.getData('text/plain');
        
        if (imageId) {
            const card = document.querySelector(`.card[data-id="${imageId}"]`);
            if (card) card.click();
        }
    });
}