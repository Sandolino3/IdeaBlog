import { getDetails } from "../data.js";

const section = document.getElementById('detailsPage')

export async function showDetails(context, id){   

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
            <a data-id= "${details._ownerId}" class="btn detb" href="/delete">Delete</a>
        </div>`
        }
    return element
}

