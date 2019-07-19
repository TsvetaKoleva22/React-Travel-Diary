function getAuthHeader(){
    let jwt = sessionStorage.getItem('token');
    if(jwt && jwt.length){
        return {'Authorization': `Bearer ${jwt}`};
    } else{
        return {};
    }
}

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
    const authHeader = getAuthHeader();

    return fetch('http://localhost:5000/adv/create', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...authHeader
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
    const authHeader = getAuthHeader();

    return fetch(`http://localhost:5000/adv/edit/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...authHeader
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
    const authHeader = getAuthHeader();

    return fetch(`http://localhost:5000/adv/like/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...authHeader
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
    const authHeader = getAuthHeader();

    return fetch(`http://localhost:5000/adv/delete/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            ...authHeader
        },
        })
        .then(function (response) {
            return response.json();
        })
        .catch(function (err) {
            console.log(err);
        })
}

