import * as api from "./api.js"
import { showHome } from "./views/home.js"
import{ showCatalog }from"./views/catalog.js"
import{ showDetails }from"./views/details.js"
import{ showCreate }from"./views/create.js"
import{ showLogin }from"./views/login.js"
import{ showRegister }from"./views/register.js"


const main = document.querySelector('body')

document.getElementById('views').remove()

document.querySelector('nav').addEventListener('click', onNavigate)

const links = {
    '/':showHome,
    '/catalog':showCatalog,
    '/details': showDetails,
    '/create': showCreate,
    '/login': showLogin,
    '/register': showRegister

}

const context = {
    showSection
}

// showHome(context)

function showSection(section){
    
    main.replaceChildren(section)

}


function onNavigate(e){
    e.preventDefault()
    if(e.target.tagName== "A"){
        const url = new URL(e.target.href)
        console.log(url.pathname);
        
    }
    

}
