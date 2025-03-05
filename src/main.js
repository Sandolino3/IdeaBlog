import { showHome } from "./views/home.js"
import{ showCatalog }from"./views/catalog.js"
import{ showDetails }from"./views/details.js"
import{ showCreate }from"./views/create.js"
import{ showLogin }from"./views/login.js"
import{ showRegister }from"./views/register.js"
import { initialize } from "./router.js"



document.getElementById('views').remove()


const links = {
    '/':showHome,
    '/catalog':showCatalog,
    '/details': showDetails,
    '/create': showCreate,
    '/login': showLogin,
    '/register': showRegister

}

const router = initialize(links)



router.goTo('/')
