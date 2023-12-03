const littleButton = document.querySelector('.btn-warning');
const bigButton = document.querySelector('.btn-success');
const textBlock = document.querySelector('.first-block');
const page = document.querySelector('.page');
const popup = document.querySelector('.popup');
const popupButton = document.querySelector('.popup__close-button');


function changePopupVisibility() {
    popup.classList.toggle('hidden');
}


littleButton.addEventListener('click', () => {
    textBlock.classList.toggle('hidden');
});

bigButton.addEventListener('click', () => {
    const elements = page.getElementsByTagName('div');
    page.insertBefore(elements[1], elements[0]);
});

popupButton.addEventListener('click', changePopupVisibility);

document.addEventListener("DOMContentLoaded", () => {
    changePopupVisibility();
    setTimeout(() => {popup.classList.add('hidden');}, 3500);
});