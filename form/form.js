const form = document.querySelector('.form');
const popup = document.querySelector('.popup');
const popupText = document.querySelector('.popup__text');
const popupButton = document.querySelector('.popup__close-button');


function showPopup(message) {
    popup.classList.remove('hidden');
    popupText.innerHTML = message;
    setTimeout(() => {popup.classList.add('hidden');}, 4000);
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(form);
    let data = {};

    for (let [key, value] of formData) {
        let element = document.getElementById(`${key}`);
        element.textContent = value;
        data[key] = value;
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(() => {
            showPopup('Форма успешно отправлена.');
        })
        .catch((err) => {
            showPopup(`При отправке формы произошла ошибка: ${err}.`);
        })
}


form.addEventListener('submit', handleFormSubmit);

popupButton.addEventListener('click', () => {
    popup.classList.add('hidden');
});