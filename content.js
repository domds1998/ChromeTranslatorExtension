window.addEventListener('mouseup', mouseUpped);
const body = document.body;
const popupIconNode = document.createElement('div');
popupIconNode.classList.add('iconPopup');

console.log("hmmm");

function mouseUpped() {
    let selectedText = window.getSelection().toString();
    let mousePositionX = event.pageX;
    let mousePositionY = event.pageY;
    if (selectedText.length > 0 || selectedText != "") {
        body.appendChild(popupIconNode);
        popupIconNode.style.top = (mousePositionY + 10) + 'px';
        popupIconNode.style.left = mousePositionX + 'px';
    } else {
        if (popupIconNode.parentNode != null)
            popupIconNode.parentNode.removeChild(popupIconNode);
    }
}