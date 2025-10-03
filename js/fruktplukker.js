// Først, opprett en knapp for å generere fruktene
const button = document.createElement("button");
button.innerHTML = "Generer frukt";
document.body.appendChild(button);
// Når knappen klikkes, generer en ny frukt
button.addEventListener("click", nyFrukt)

let gameOver = false;
let poeng = 0;

const poengEl = document.createElement("div")
poengEl.id = "poengDiv"
document.body.appendChild(poengEl)

const interval = setInterval(() => {
    const chance = Math.random(); // number between 0 and 1
    if (chance < 0.7) {  // 70% chance
        nyFrukt();
    } else {             // 30% chance
        nyBombe();
    }

}, 800)

function nyFrukt() 
{
    const frukt = document.createElement("button");
    frukt.innerHTML = "🍎"; // Du kan endre dette til forskjellige frukt emojis
    frukt.style.fontSize = "2em";
    frukt.style.position = "absolute";
    frukt.style.left = Math.random() * window.innerWidth + 'px'; // Plasser frukten på en tilfeldig x-posisjon
    frukt.style.top = window.innerHeight
    frukt.className = "eple"
    document.body.appendChild(frukt);
 
    // Når frukten klikkes, fjern den fra skjermen
    frukt.addEventListener("click", fjernFrukt)
}

function nyBombe() 
{
    const bombe = document.createElement("button");
    bombe.innerHTML = "💣"; // Du kan endre dette til forskjellige frukt emojis
    bombe.style.fontSize = "2em";
    bombe.style.position = "absolute";
    bombe.style.left = Math.random() * window.innerWidth + 'px'; // Plasser frukten på en tilfeldig x-posisjon
    bombe.style.top = window.innerHeight
    bombe.className = "bombE"
    document.body.appendChild(bombe);
 
    // Når frukten klikkes, fjern den fra skjermen
    bombe.addEventListener("click", eksploder)
}

function eksploder(e)
{
      gameOver = true;
      document.body.removeChild(e.target); 
}

/* Legg merke til bokstaven e inne i parentesen på linja under. 
Dette betyr at vi sender informasjon om hendelsen (event) som trigget funksjonen inn i funksjonen. e kalles hendelses-objektet */
function fjernFrukt(e)
{
    poeng ++;
    poengEl.innerHTML= "Poeng: " + poeng;
    document.body.removeChild(e.target); 
    //e.target er det elementet som trigget hendelsen, det vil si elementet vi klikket på for å aktivere funksjonen.
}