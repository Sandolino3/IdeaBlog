import * as api from "./api.js"

const main = document.querySelector('body')
const homePAge = document.getElementById('homePage')
const registerPage = document.getElementById('registerPage')
const loginPage = document.getElementById('loginPage')
const catalogPage = document.getElementById('dashboard-holder')
const detailsPage = document.getElementById('detailsPage')
const createPage = document.getElementById('createPage')
document.getElementById('views').remove()

const links = {
    '/':homePAge,
    '/catalog':catalogPage,
    '/details': detailsPage,
    '/create': createPage,
    '/login': loginPage,
    '/register': registerPage

}

function showSection(name){
    const section = links[name]
    
    main.replaceChildren(section)

}

showSection('/catalog')