
export function initialize(links){
const main = document.querySelector('main')
const nav = document.querySelector('nav')
nav.addEventListener('click', onNavigate)


    const context = {
        showSection,
        goTo,
        updateNav
    }

    return context;

    function showSection(section){
    
        main.replaceChildren(section)
    
    }
    
    function onNavigate(e){
        e.preventDefault()
        let target = e.target
        if (target.tagName == 'IMG') {
            target = target.parentElement   
            
        }
       
        if(target.tagName== "A"){
            const url = new URL(target.href)
           goTo(url.pathname)
        }
        
    
    }
    
    function goTo(name, ...params){
        const handler = links[name]
        if (typeof handler == 'function') {
            handler(context, ...params)
        }
    }
    function updateNav(){
        const user = localStorage.getItem('user')
        
        if (user) {
            nav.querySelectorAll('#user').forEach(el => el.style.display = 'inline-block')
            nav.querySelectorAll('#guest').forEach(el => el.style.display = 'none')

        }else{
            nav.querySelectorAll('#guest').forEach(el => el.style.display = 'inline-block')
            nav.querySelectorAll('#user').forEach(el => el.style.display = 'none')
        }
    }
}


