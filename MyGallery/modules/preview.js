import { DOM } from './variables.js';
import { state } from './store.js';

export function initPreview() {
    toggleControls(false);

    window.addEventListener('imageSelect', (e) => {
        const imageData = e.detail;
        updatePreview(imageData);
        toggleControls(true);
    });

    DOM.closeBtn.addEventListener('click', () => {
        clearPreview();
    });

    DOM.previousBtn.addEventListener('click', () => {
        navigate(-1);
    });

    DOM.nextBtn.addEventListener('click', () => {
        navigate(1);
    });

    initKeyboardNavigation();
}

export function initKeyboardNavigation() {
    window.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }

        switch (e.key) {
            case 'ArrowLeft':
            case 'a':
            case 'ф':
                if (!DOM.previousBtn.disabled && state.activeIndex !== -1) {
                    DOM.previousBtn.click();
                }
                break;
            case 'ArrowRight':
            case 'd':
            case 'в':
                if (!DOM.nextBtn.disabled && state.activeIndex !== -1) {
                    DOM.nextBtn.click();
                }
                break;
            case 'Escape':
                if (state.activeIndex !== -1) {
                    clearPreview();
                }
                break;
        }
    });
}

function toggleControls(isVisible) {
    if (isVisible) {
        DOM.closeBtn.classList.remove('hidden');
        DOM.navContainer.classList.remove('hidden');
    } else {
        DOM.closeBtn.classList.add('hidden');
        DOM.navContainer.classList.add('hidden');
    }
}

function updatePreview(imageData) {
    state.activeIndex = state.allImages.findIndex(img => img.id === imageData.id);

    const oldImg = DOM.preview.querySelector('.preview-image');
    if (oldImg) oldImg.remove();

    const img = document.createElement('img');
    img.src = imageData.url;
    img.alt = imageData.name;
    img.className = 'preview-image';
    
    DOM.preview.prepend(img);

    updateNavButtons();
}

function navigate(direction) {
    const newIndex = state.activeIndex + direction;
    if (newIndex >= 0 && newIndex < state.allImages.length) {
        const nextImageData = state.allImages[newIndex];
        highlightCard(nextImageData.id);
        updatePreview(nextImageData);
    }
}

function highlightCard(id) {
    document.querySelectorAll('.card').forEach(card => {
        card.classList.toggle('active', parseInt(card.dataset.id) === id);
    });
}

function updateNavButtons() {
    DOM.previousBtn.disabled = state.activeIndex <= 0;
    DOM.nextBtn.disabled = state.activeIndex >= state.allImages.length - 1;
}

function clearPreview() {
    const img = DOM.preview.querySelector('.preview-image');
    if (img) img.remove();

    state.activeIndex = -1;
    toggleControls(false); 

    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active');
    });

    updateNavButtons();
}