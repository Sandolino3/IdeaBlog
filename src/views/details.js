import { getDetails } from "../data.js";

const section = document.getElementById('detailsPage')

export async function showDetails(context, id){   

    let detailsData = await getDetails(id)
    
    section.replaceChildren(createDetailPreview(detailsData))
     
    context.showSection(section)
}

function createDetailPreview(details){
    const element = document.createElement('div')
    element.innerHTML =`<img class="det-img" src=${details.img} />
        <div class="desc">
            <h2 class="display-5">${details.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${details.description}</p>
        </div>
        <div class="text-center">
            <a data-id= "${details._ownerId}" class="btn detb" href="">Delete</a>
        </div>`
    return element
}

