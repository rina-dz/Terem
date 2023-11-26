const form = document.querySelector('.form');

class Api {
    constructor(data) {
        this.baseUrl = data.baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkResponse)
    }

    getInfo() {
        return this._request(`${this.baseUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

};

const newApi = new Api({
    baseUrl: 'https://random.url/',
})

newApi.getInfo()
    .then((info) => {
        alert(`Информация получена - ${info}`);
    })
    .catch((err) => {
        alert(`Произошла ошибка при отправке запроса  - ${err}`);
    })

function handleFormSubmit(evt) {
    evt.preventDefault();
    const array = Array.from(form.elements);

    array.forEach((el) => {
        let element = document.getElementById(`${el.name}`);
        element.textContent = el.value;
    })

}


form.addEventListener('submit', handleFormSubmit)