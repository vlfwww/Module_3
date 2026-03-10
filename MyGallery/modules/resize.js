import { DOM } from './variables.js';

export function initResize() {
    const resizer = DOM.resizer;
    const leftSide = DOM.gallery; 

    if (!resizer || !leftSide || !DOM.workspaceContainer) return;

    resizer.addEventListener('mousedown', (e) => {
        e.preventDefault(); 
        document.body.style.cursor = 'col-resize';
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    });

    function handleMouseMove(e) {
        const containerWidth = DOM.workspaceContainer.offsetWidth;
        const containerOffsetLeft = DOM.workspaceContainer.getBoundingClientRect().left;
        
        let pointerX = e.clientX - containerOffsetLeft;

        let newWidthPercent = (pointerX / containerWidth) * 100;

        if (newWidthPercent >= 30 && newWidthPercent <= 80) {
            leftSide.style.flex = `0 0 ${newWidthPercent}%`;
        }
    }

    function handleMouseUp() {
        document.body.style.cursor = 'default';
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }
}