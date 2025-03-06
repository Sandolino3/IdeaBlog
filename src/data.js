import * as api from "./api.js"

const endpoints = {
    'ideas': '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    'create': '/data/ideas',
}

export async function getAllIdeas(){
    // console.log(api.get(endpoints.ideas) );
    
    return api.get(endpoints.ideas)
}

export async function createIdea(title, description, imageURL) {
    let data = {
        title,
        description,
        imageURL
    }

    api.post(endpoints.create, data)
}