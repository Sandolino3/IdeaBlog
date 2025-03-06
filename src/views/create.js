import { createIdea } from "../data.js"

const section = document.getElementById('createPage')
const formEl = section.querySelector('form')
formEl.addEventListener('submit', onSubmit)

let ctx = null

export function showCreate(context){    
    context.showSection(section)
    ctx = context
}

async function onSubmit(e) {
    e.preventDefault()
    let data = new FormData(formEl)
    let title = data.get('title')
    let description = data.get('description')
    let imageURL = data.get('imageURL')
    
    if (title.length >= 6 && description.length >= 10 && imageURL.length >= 5) {
        createIdea(title, description, imageURL)
        ctx.goTo('/') 
    }else{
        alert('Words must be logner!')
    }
    
 
    
}