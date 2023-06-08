const posts = [
    {
        name: "Lucas",
        nickname: '@LucasOK',
        timestamp: '10 minutes ago',
        likes: 65,
        retweets: 5,
        comments: 3,
        userImage: 'https://lh3.googleusercontent.com/oUNz--fmfv96BCRoVs09WWkQtcuwV7y4JEeudixrRX_h2hWItOq9Zlepp3K4wvItzmS5SLRqkn9I6NO7U3i0-EJ4wVjx6gT1CCXXyJUTWQw0Ok12rio=w500-rp-e30',
        content: 'Me gusta mirar game of thrones'
    },
    {
        name: "Dardo",
        nickname: '@LucasOK',
        timestamp: '10 minutes ago',
        likes: 65,
        retweets: 5,
        comments: 3,
        userImage: 'https://lh3.googleusercontent.com/oUNz--fmfv96BCRoVs09WWkQtcuwV7y4JEeudixrRX_h2hWItOq9Zlepp3K4wvItzmS5SLRqkn9I6NO7U3i0-EJ4wVjx6gT1CCXXyJUTWQw0Ok12rio=w500-rp-e30',
        content: 'No creo que la Scaloneta se frene ahora'
    },
    {
        name: "Marita",
        nickname: '@LucasOK',
        timestamp: '10 minutes ago',
        likes: 65,
        retweets: 5,
        comments: 3,
        userImage: 'https://lh3.googleusercontent.com/oUNz--fmfv96BCRoVs09WWkQtcuwV7y4JEeudixrRX_h2hWItOq9Zlepp3K4wvItzmS5SLRqkn9I6NO7U3i0-EJ4wVjx6gT1CCXXyJUTWQw0Ok12rio=w500-rp-e30',
        content: 'Los dias de lluvia se debe comer torta frita'
    },
]


const postsContainerHTML = document.querySelector('.posts')

const renderizarPosts = (posts) =>{
    postsContainerHTML.innerHTML = ''
    posts.forEach(post =>{
        postsContainerHTML.innerHTML += `
        <div>
            <img src="${post.userImage}" width="50px">
            <div>
                <span>${post.name}</span>
                <span>${post.nickname}</span>
            </div>
            <span>${post.timestamp}</span>
            <p>${post.content}</p>
            <div>
                <span>${post.likes} likes</span>
                <span>${post.retweets} retweets</span>
                <span>${post.comments} comments</span>
            </div>
            <hr>

        </div>
        `
    }) 
}

renderizarPosts(posts)

const saludar = () =>{
    console.log('hola')
}
/* Obtenemos el elemento click con id BTN y lo guardamos en una constante */
const btnClick = document.getElementById('btn')
/* 
Segunda forma:

btnClick.onclick = saludar */


/* btnClick.addEventListener('click', saludar) */

btnClick.addEventListener('focus', ( ) =>{
    console.log('Se presiono el boton')
})

btnClick.addEventListener('click', ()=>{
    console.log('Se presio el boton y se levanto el dedo')
})




/* Buscar el timer */
btnClick.addEventListener('dblclick', ()=>{
    console.log('Se hizo doble click')
})

const search = document.getElementById('search')

search.addEventListener('input', ()=>{
    
    let valorDelInput = search.value.toLowerCase()
    console.log(valorDelInput)

    renderizarPosts(posts.filter(post => post.content.toLowerCase().includes(valorDelInput)))
})

/* const contador = document.getElementById("contador")
const suma = document.getElementById("suma")
const resta = document.getElementById("resta")

let numero = 0;

suma.addEventListener("click", ()=> {
    numero = numero + 1
    contador.innerHTML = numero;
})

resta.addEventListener("click", ()=> {
    numero = numero - 1
    contador.innerHTML = numero;
}) */


const btnMenu = document.getElementById('btn-menu')
const navbarHTML = document.getElementById('navbar')
btnMenu.addEventListener('click', ()=>{
    
    navbarHTML.classList.toggle('oculto')
    console.log(navbarHTML.classList)
})





