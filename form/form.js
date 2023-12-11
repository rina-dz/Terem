const form = document.querySelector('.form');
const result = document.querySelector('.results');
const popup = document.querySelector('.popup');
const popupText = document.querySelector('.popup__text');
const popupButton = document.querySelector('.popup__close-button');


function showPopup(message) {
    popup.classList.remove('hidden');
    popupText.innerHTML = message;
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    result.innerHTML = '<h2>Результат:</h2>';
    const formData = new FormData(form);
    let data = {};

    for (let [key, value] of formData) {
        data[key] = value;
        result.insertAdjacentHTML('beforeend', `<p>${value}</p>`);
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
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