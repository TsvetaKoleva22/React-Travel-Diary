export const getAllAdventuresFetch = function () {
    return fetch('http://localhost:5000/adv/all')
        .then(function (results) {
            return results.json();
        })
        .catch(function (err) {
            console.log(err);
        })
}

export const createAdventureFetch = function (advData) {
    return fetch('http://localhost:5000/adv/create', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(advData)
        })
        .then(function (response) {
            return response.json();
        })
        .catch(function (err) {
            console.log(err);
        })
}

export const editAdventureFetch = function (advData, id) {
    return fetch(`http://localhost:5000/adv/edit/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(advData)
        })
        .then(function (response) {
            return response.json();
        })
        .catch(function (err) {
            console.log(err);
        })
}

export const likeAdventureFetch = function (advData, id) {
    return fetch(`http://localhost:5000/adv/like/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(advData)
        })
        .then(function (response) {
            return response.json();
        })
        .catch(function (err) {
            console.log(err);
        })
}

export const deleteAdventureFetch = function (id) {
    return fetch(`http://localhost:5000/adv/delete/${id}`, {
        method: "DELETE"
        })
        .then(function (response) {
            return response.json();
        })
        .catch(function (err) {
            console.log(err);
        })
}

