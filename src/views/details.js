import { getDetails } from "../data.js";

const section = document.getElementById('detailsPage')

let ctx = null;

export async function showDetails(context, id){   
    ctx = context;

    let detailsData = await getDetails(id)
    
    section.innerHTML = createDetailPreview(detailsData)
     
    context.showSection(section)
}

function createDetailPreview(details){
    const user = JSON.parse(localStorage.getItem('user'))
    let element = `<img class="det-img" src=${details.img} />
        <div class="desc">
            <h2 class="display-5">${details.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${details.description}</p>
        </div>
`
        if (user && user._id == details._ownerId ) {            
            element += `<div class="text-center">
            <a data-id= "${details._id}" class="btn detb" href="/delete">Delete</a>
        </div>`
        }
    return element
}
section.addEventListener('click', deleteFunc)

async function deleteFunc(e) {
    if (e.target.tagName == "A") {
    e.preventDefault()
    let id = e.target.dataset.id
    
    let response = await fetch('http://localhost:3030/data/ideas/' + id, {
        method: 'DELETE',
        headers: {
            'X-Authorization': JSON.parse(localStorage.getItem('user')).accessToken
        }
    })
    if (response.ok) {
        alert('Idea deleted')
        ctx.goTo('/')
    }else{
        let error = await response.json()
        alert(error.message)
    }    
        
}


}