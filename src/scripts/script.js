const littleButton = document.querySelector('.btn-warning');
const bigButton = document.querySelector('.btn-success');
const textBlock = document.querySelector('.first-block');
const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');

function toggleTextBlock() {
    if (textBlock.classList.contains('hidden')) {
        textBlock.classList.remove('hidden');
    } else {
        textBlock.classList.add('hidden');
    }
}

function changeDivs() {
    if (firstDiv.classList.contains('first-div')) {
        firstDiv.classList.remove('first-div');
        secondDiv.classList.remove('second-div');

        firstDiv.classList.add('second-div');
        secondDiv.classList.add('first-div');
    } else {
        secondDiv.classList.remove('first-div');
        firstDiv.classList.remove('second-div');

        secondDiv.classList.add('second-div');
        firstDiv.classList.add('first-div');
    }
}


littleButton.addEventListener('click', toggleTextBlock);
bigButton.addEventListener('click', changeDivs);
document.addEventListener("DOMContentLoaded", () => {
    alert('Привет, Мир');
});