// ----------- Réponses du narrateur et interactions homme-machine ---------------------------------------------

const reponses = {
    "cestNul": "C'est nul...",
    "moiNonPlus": "Moi non plus...",
    "foret": "Soit, c'est chill la forêt. Mais attention, des monstres pourraient vous dévorer. C'est bien connu.",
    "ville": "Évidemment, en ville on prend pas trop de risques... C'est sûr que c'est pas là-bas que vous allez subir une attaque zombie !",
    "ouiContinuer": "Bon courage alors !",
    "dommageAutreFois": "Dommage, peut-être une autre fois.",
    "acheterLimonade": "Pourquoi ??",
    "rireToutSeul": "D'accord, vous riez tout seul en face du vendeur. Il doit vous prendre pour un fou."
};

// Fonction pour gérer les boutons et liens internes
function gererInteraction(event) {
    event.preventDefault(); // Empêcher le comportement par défaut

    const element = event.target;
    const reponseId = element.getAttribute("data-reponse"); // Si l'élément est un bouton pour faire parler le narrateur
    const nextId = element.getAttribute("data-next") || element.getAttribute("href"); // Si l'élément est un bouton ou un lien qui mène à la suite

    // Afficher la réponse du narrateur si applicable
    if (reponseId) {
        const message = element.parentElement.querySelector(".message");
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

// Ajouter l'événement sur tous les boutons et liens internes
document.querySelectorAll("button, a[href^='#']").forEach(element => {
    element.addEventListener("click", gererInteraction);
});




// -------- Afficher le jour actuel ------------------------------------------------------------------------------

// Tableau des jours en français et insertion dans le HTML
document.querySelector(".jourActuel").textContent = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"][new Date().getDay()];
