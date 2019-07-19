function getAuthHeader(){
    let jwt = sessionStorage.getItem('token');
    if(jwt && jwt.length){
        return {'Authorization': `Bearer ${jwt}`};
    } else{
        return {};
    }
}

export const createCatFetch = function (catData) {
    const authHeader = getAuthHeader();

    return fetch('http://localhost:5000/category/create', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...authHeader
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