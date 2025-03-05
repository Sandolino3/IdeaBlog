import { login } from "../users.js";


const section = document.getElementById('loginPage')
let formEl = section.querySelector('form')
formEl.addEventListener('submit', loginSubmit)



let ctx = null;


export function showLogin(context){    
    ctx = context
    context.showSection(section)
}

async function loginSubmit(e) {
    e.preventDefault()
    let data = new FormData(formEl)
    let email = data.get('email')
    let password = data.get('password')
    console.log(email,password);
    

    await login(email,password)
    formEl.reset()
    ctx.goTo('/')
    
}
