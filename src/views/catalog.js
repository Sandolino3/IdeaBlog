import { getAllIdeas } from "../data.js"
// import{ goTo } from "../router.js"

const section = document.getElementById('dashboard-holder')
section.addEventListener('click', onSelectDetails)

let ctx = null;

export async function showCatalog(context){
    context.showSection(section)
    let ideas = await getAllIdeas();

    if (ideas.length == 0) {
        section.innerHTML = '<h1>No ideas yet! Be the first one :)</h1>'
    }else{
        section.replaceChildren( ...ideas.map(createIdeaPreview)) 
    }
        
    ctx = context;
}

function createIdeaPreview(idea){    
    const element = document.createElement('div')
    element.className = 'card overflow-hidden current-card details'
    element.style.width = '20rem'
    element.style.height = '18rem'
    element.innerHTML = `<div class="card-body">
                <p class="card-text">${idea.title}</p>
            </div>
            <img class="card-image" src="${idea.img}" alt="Card image cap">
            <a data-id= "${idea._id}" class="btn" href="/details">Details</a>
        </div>`        
    return element;
}

function onSelectDetails(e){
    e.preventDefault()
    if (e.target.tagName == "A") {
        let url = new URL(e.target.href)
        ctx.goTo(url.pathname,e.target.dataset.id)
        
    }
    
    
}



