import { register } from "../users.js"

const section = document.getElementById('registerPage')
const formEl = section.querySelector('form')
formEl.addEventListener('submit', onSubmit)

let ctx = null

export function showRegister(context){    
    context.showSection(section)
    ctx = context
}


async function onSubmit(e) {
    e.preventDefault()
    let data = new FormData(formEl)
    let email = data.get('email')
    let password = data.get('password')
    let rePassword = data.get('repeatPassword')

    

    if (password != rePassword) {
        alert('Password does not match!')
    }else{
        await register(email, password)
        formEl.reset()
    
        ctx.goTo('/')
    }    


}