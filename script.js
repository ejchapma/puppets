// DRAGGABLE ELEMENTS
let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;
let activeItem = null;

let dragItems = document.querySelectorAll('.draggable');

dragItems.forEach(item => {
    item.addEventListener('mousedown', dragStart);
    item.addEventListener('mouseup', dragEnd);
    item.addEventListener('mousemove', drag);
});

function dragStart(e) {
    if (e.target === e.currentTarget) {
        active = true;
        activeItem = e.target;

        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }
}

function dragEnd() {
    initialX = currentX;
    initialY = currentY;

    active = false;
    activeItem = null;
}

function drag(e) {
    if (active && activeItem) {
        e.preventDefault();

        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, activeItem);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate(${xPos}px, ${yPos}px)`;
}
