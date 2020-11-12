export default class Api{
    constructor(config) {
        this.headers = config.headers;
        this.url = config.url;
        this.cardId = config._id;
    }

    getUserData() {
        return fetch(`${this.url}/users/me`, {
            headers: this.headers
        }).then((result) => {
            if (result.ok){
                return result.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        }).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        });
    }

    getCards() {
        return fetch(`${this.url}/cards`, {
            headers: this.headers
        }).then((result) => {
            if (result.ok){
                return result.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        }).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        })
    }

    sendEditProfile(formValues) {
        return fetch(`${this.url}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: formValues.name,
                about: formValues.about
            })
        }).then((result) => {
            if (result.ok){
                return result.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        }).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        });
    }

    sendNewCard(newCardValue) {
        return fetch(`${this.url}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: newCardValue.name,
                link: newCardValue.link
            })
        }).then((result) => {
            if (result.ok){
                return result.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        }).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        });
    }

    deleteCard(cardId) {
        return fetch(`${this.url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this.headers,
        }).then((result) => {
            if (result.ok){
                return result.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        }).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        });
    }

    addLike(cardId) {
        return fetch(`${this.url}/cards/likes/${cardId}`,{
            method: 'PUT',
            headers: this.headers,
        }).then((result) => {
            if (result.ok){
                return result.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        }).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        });
    }

    deleteLike(cardId) {
        return fetch(`${this.url}/cards/likes/${cardId}`,{
            method: 'DELETE',
            headers: this.headers,
        }).then((result) => {
            if (result.ok){
                return result.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        }).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        });
    }

    changeAvatar(urlNewAvatar) {
        return fetch(`${this.url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
            avatar: urlNewAvatar,
            })
        }).then((result) => {
            if (result.ok){
                return result.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        }).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        });
    }

}