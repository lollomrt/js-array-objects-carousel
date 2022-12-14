const imagesArray = [
    {
        url: "01.webp",
        nome: "Spiderman: Miles Morales",
        descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequatur minima quas laudantium doloribus quibusdam eligendi assumenda"
    },
    {
        url: "02.webp",
        nome: "Ratchet & Clank",
        descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequatur minima quas laudantium doloribus quibusdam eligendi assumenda"
    },
    {
        url: "03.webp",
        nome: "Fortnite",
        descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequatur minima quas laudantium doloribus quibusdam eligendi assumenda"
    },
    {
        url: "04.webp",
        nome: "Stray Cat",
        descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequatur minima quas laudantium doloribus quibusdam eligendi assumenda"
    },
    {
        url: "05.webp",
        nome: "Marvels Avengers",
        descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequatur minima quas laudantium doloribus quibusdam eligendi assumenda"
    }
] 

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

imagesArray.forEach((element) =>{
    itemsContent += `<div class="contenitore-slide item">
                                <img src="./img/${element.url}" alt="">
                                <div class="description">
                                    <h4>${element.nome}</h4>
                                    <p>${element.descrizione}</p>
                                </div>
                            </div>`
})

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){
    //verifico l'elemento attivo (itemActive)
    let lastItemActive = items[itemActive]
    let lastCircleActive = circles[itemActive]

    //incremento il suo valore di 1
    if (itemActive == items.length - 1){
        itemActive = 0
    } else {
        itemActive = itemActive + 1
    }
    
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    let activeItem = items[itemActive]
    let activeCircle = circles[itemActive]
    activeItem.classList.add("active")
    lastItemActive.classList.remove("active")
    //stessa cosa per i cerchi
    activeCircle.classList.add("active")
    lastCircleActive.classList.remove("active")
});

prev.addEventListener('click', function(){
    let lastItemActive = items[itemActive]
    let lastCircleActive = circles[itemActive]

    //incremento il suo valore di 1
    if (itemActive == 0){
        itemActive = items.length - 1
    } else {
        itemActive = itemActive - 1
    }
    
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    let activeItem = items[itemActive]
    let activeCircle = circles[itemActive]
    activeItem.classList.add("active")
    lastItemActive.classList.remove("active")
    //stessa cosa per i cerchi
    activeCircle.classList.add("active")
    lastCircleActive.classList.remove("active")
})

// Inizio autoplay
let myAutoplay = setInterval(autoplay, 2000)

document.getElementById("attiva").addEventListener("click", function(){
    myAutoplay = setInterval(autoplay, 2000)
    console.log(myAutoplay)
})

document.getElementById("disattiva").addEventListener("click", function(){
    clearInterval(myAutoplay)
})

function autoplay() {
    //verifico l'elemento attivo (itemActive)
    let lastItemActive = items[itemActive]
    let lastCircleActive = circles[itemActive]

    //incremento il suo valore di 1
    if (itemActive == items.length - 1){
        itemActive = 0
    } else {
        itemActive = itemActive + 1
    }
    
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    let activeItem = items[itemActive]
    let activeCircle = circles[itemActive]
    activeItem.classList.add("active")
    lastItemActive.classList.remove("active")
    //stessa cosa per i cerchi
    activeCircle.classList.add("active")
    lastCircleActive.classList.remove("active")
}