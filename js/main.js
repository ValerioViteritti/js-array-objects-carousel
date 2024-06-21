// Consegna:
// Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.   Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Variabile dove inserire le BigPicture dei videogame
let FotoPrincipale = document.getElementsByClassName('Foto-Container')[0];
// Variabile dove inserire le SmallPicture dei videogame
let FotoMini = document.getElementsByClassName('Mini-Foto-container')[0];

let FotoNumero = 0;

images.forEach(Game => {
    const creaImg = (classe) => {
        let img = document.createElement('img');
        img.classList.add(classe);
        img.src = Game.image;
        return img;
    };

    let card = creaImg("Foto-Grande");
    let cardX = creaImg("Foto-Piccola");

    FotoPrincipale.append(card);
    FotoMini.append(cardX);
    FotoNumero++;
});

document.documentElement.style.setProperty('--FotoNumero', FotoNumero);

let BigImage = document.getElementsByClassName('Foto-Grande');
let SmallImage = document.getElementsByClassName('Foto-Piccola');
let contatore = 0;
// Testo da inserire nelle immagini
let nomeVideogame = document.getElementById('Nome-videogame');
let descrizione = document.getElementById('Descrizione');

const aggiornaFoto = (indice) => {
    Array.from(BigImage).forEach((foto, i) => {
        foto.classList.toggle('active', i === indice);
        SmallImage[i].classList.toggle('active', i === indice);
    });
    nomeVideogame.textContent = images[indice].title;
    descrizione.textContent = images[indice].text;
};

aggiornaFoto(contatore);

const BottoneSu = document.querySelector('.bottoneSu');
const BottoneGiu = document.querySelector('.bottoneGiu');

BottoneSu.addEventListener('click', (e) => {
    e.stopPropagation();
    su();
});

BottoneGiu.addEventListener('click', (e) => {
    e.stopPropagation();
    giu();
});

function su() {
    contatore = (contatore - 1 + images.length) % images.length;
    aggiornaFoto(contatore);
}

function giu() {
    contatore = (contatore + 1) % images.length;
    aggiornaFoto(contatore);
}

// ciclo automatico

let intervalloId
let inFunzione = false;

const start = () => {
    if (!inFunzione) {
        intervalloId = setInterval(giu, 3000);
        inFunzione = true;
    }
};

const stop = () => {
    if (inFunzione) {
        clearInterval(intervalloId);
        inFunzione = false;
    }
};

const startInverso = () => {
    if (!inFunzione) {
        intervalloId = setInterval(su, 3000);
        inFunzione = true;
    }
};

document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('start-inverso').addEventListener('click', startInverso);

// document.querySelectorAll('.Foto-Piccola').forEach(card => {
//     card.addEventListener('click', event => {
//         event.currentTarget.classList.add('active');
    
//     });
// });




























