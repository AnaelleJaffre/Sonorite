// ----------- Réponses du narrateur et interactions homme-machine ---------------------------------------------

// BDD des réponses du narrateur
const reponses = {
    "cestNul": "C'est nul...",
    "moiNonPlus": "Moi non plus...",
    "foret": "Soit, c'est chill la forêt. Mais attention, des monstres pourraient vous dévorer. C'est bien connu.",
    "ville": "Évidemment, en ville on prend pas trop de risques... C'est sûr que c'est pas là-bas que vous allez subir une attaque zombie !",
    "ouiContinuer": "Bon courage alors !",
    "dommageAutreFois": "Dommage, peut-être une autre fois.",
    "acheterLimonade": "Pourquoi ??",
    "rireToutSeul": "D'accord, vous riez tout seul en face du vendeur. Il doit vous prendre pour un fou.",
    "pointDeVue": "C'est seulement votre point de vue.",
    "certes": "Certes.",
    "confianceBret": "Oui, vous lui faites confiance ! Après tout, Bret est votre collègue depuis au moins 5 ans déjà.",
    "pasConfianceBret": "Vous vous arrêtez et plissez les yeux.",
    "inertie": "Vous êtes une personne vide ?",
    "interet": "Ah, on est d'accord ! Il y a clairement anguille sous roche.",
    "rireEncorePlusSeul" : "Vous aimez bien, rire tout seul, pour aucune raison ?"
};

// Fonction pour gérer les boutons et liens internes
function gererInteraction(event) {
    event.preventDefault(); // Empêcher le comportement par défaut

    const element = event.target;
    const reponseId = element.getAttribute("data-reponse"); 
    const nextId = element.getAttribute("data-next") || element.getAttribute("href");

    // Afficher la réponse du narrateur si applicable
    if (reponseId) {
        // On récupère le premier élément suivant qui possède la classe "message"
        const message = getNextMessage(element);
        if (message) {
            message.textContent = reponses[reponseId] || "(le narrateur n'a actuellement pas envie de vous répondre.)";
        }
    }

    // Effectuer un scroll fluide vers la section suivante si applicable
    if (nextId && nextId.startsWith("#")) {
        const nextElement = document.querySelector(nextId);
        if (nextElement) {
            nextElement.scrollIntoView({ behavior: "smooth" });
        }
    }
}

// Fonction pour chercher le prochain message à compléter dans l'interaction utilisateur-narrateur
function getNextMessage(element) {
    let next = element.nextElementSibling; // On récupère l'élément frère suivant
    while (next) {
        // Si cet élément possède la classe "message", on le retourne
        if (next.classList && next.classList.contains("message")) {
            return next;
        }
        next = next.nextElementSibling; // Sinon, on passe au suivant
    }
    return null; // S'il n'y en a aucun, on retourne null
}

// Ajouter l'événement sur tous les boutons et liens internes
document.querySelectorAll("button, a[href^='#']").forEach(element => {
    element.addEventListener("click", gererInteraction);
});




// -------- Affichage du jour et justification de Jeff ---------------------------------------------------------

const jourActuel = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"][new Date().getDay()];
document.querySelector(".jourActuel").textContent = jourActuel; // Là on affiche le jour actuel

const justificationJourMarche = document.getElementById("justificationJourMarche"); // on récupère le span ou Jeff se justifie
if (justificationJourMarche) justificationJourMarche.textContent = ["samedi", "dimanche"].includes(jourActuel) 
    ? "- Bah, c'est le week-end, je fais mon marché quoi." 
    : "- Bonne question.";
