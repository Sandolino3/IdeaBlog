const host = "http://localhost:3030"

export async function request(method, url, data) {
    const options = {
        method,
        headers: {

        },
    }

    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        const token = user.accessToken
        options.headers['X-Authorization'] = token
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }

    try {
        const response = await fetch(host + url, options)        
        if (response.ok != true) {
            if (response.status == 403) {
                localStorage.removeItem('user')
            }
            const error = await response.json()
            throw new Error(error.message);
        }
        if (response.status == 204) {
            return response
        } else {
            
            return response.json()
        }

    } catch (err) {
        alert(err.massage)
        throw err
    }
}


const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

export{
    get,
    post,
    put,
    del as delete
}
