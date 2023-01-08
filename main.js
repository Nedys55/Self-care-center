// Variables
const receiveButton = document.getElementById("receive-message");
const affirmationRadio = document.getElementById("affirmation");
const mantraRadio = document.getElementById("mantra");
const zen = document.querySelector(".image-zen");
const message = document.getElementById('randomMessage')
const clearMessage = document.querySelector("#clear");

// Affirmations

let affirmation = [
    "On a deux vies. La deuxième commence quand on réalise qu’on en a qu’une",
    "Accepte ce qui est, laisse aller ce qui était, aie confiance en ce qui sera",
    "Avec trop on se perd. Avec moins on se trouve",
    "Quand on ne peut revenir en arrière, on ne doit se préoccuper que de la meilleure façon d’aller de l’avant.",
    "Il n’y a pas de honte à préférer le bonheur !",
    "Quand on ose, on se trompe souvent. Quand on n’ose pas, on se trompe toujours.",
    "Se donner du mal pour les petites choses, c’est parvenir aux grandes, avec le temps.",
    "Ceux qui abandonnent ne gagnent jamais, ceux qui gagnent n’abandonnent jamais.",
    "J’ai appris que le courage n’est pas l’absence de peur, mais la capacité de la vaincre.",
    "Appréciez d’échouer, et apprenez de l’échec, car on n’apprend rien de ses succès."
];

// Mantra

let mantra  = [
    "Je fais de mon mieux à chaque instant.",
    "Je donne le meilleur de moi-même et je suis comme je suis.",
    "J’accepte ce que je ne peux pas changer afin de me concentrer sur ce que je peux changer.",
    "Tout est expérience. J’apprends chaque jour.",
    "Ma situation actuelle n’est pas ma destination finale.",
    "Toutes mes émotions sont utiles, je les accueille, je les écoute, je m’en libère.",
    "Je vise le progrès, pas la perfection.",
    "Plus j’ai confiance en moi, plus j’ai confiance en d’autres personnes.",
    "Je travaille sur moi-même, pour moi-même, par moi-même.",
    "Je lâche prise et j’accepte ce que je ne peux pas contrôler."
];

// Fonctions Receive message

receiveButton.addEventListener("click" ,() => {
    if (affirmationRadio.checked || mantraRadio.checked) {
        messageRandom();
    clearMessage.style.display = "block";
}
});

function getRandomIndex (n) {
    return Math.floor(Math.random() * n);
  };


  function messageRandom() {
    let nbrRandomAffirmation = getRandomIndex(affirmation.length);
    let nbrRandomMantra = getRandomIndex(mantra.length);
    if(affirmationRadio.checked) {
        message.innerHTML = affirmation[nbrRandomAffirmation];
    }else if(mantraRadio.checked) {
        message.innerHTML = mantra[nbrRandomMantra];
    }
    
    hide(zen);
    show(message);
};

// Fonctions Clear Message

clearMessage.addEventListener("click", () =>{
    clear();
});

function clear() {
    hide(message);
    show(zen);
    clearMessage.style.display = "none";
};




// fonctions Show/Hide
function show(element) {
    element.classList.remove('hidden')
};

function hide(element) {
    element.classList.add('hidden')
  };