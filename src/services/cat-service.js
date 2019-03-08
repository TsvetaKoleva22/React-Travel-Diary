export const createCatFetch = function (catData) {
    return fetch('http://localhost:5000/category/create', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(catData)
        })
        .then(function (response) {
            return response.json();
        })
        .catch(function (err) {
            console.log(err);
        })
}

export const getAllCatsFetch = function () {
    return fetch('http://localhost:5000/category/all')
        .then(function (results) {
            return results.json();
        })
        .catch(function (err) {
            console.log(err);
        })
}