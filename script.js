// Base de données des réponses
const reponses = {
    "cestNul": "C'est nul...",
    "moiNonPlus": "Moi non plus...",
    "foret": "Vous vous dirigez vers la forêt...",
    "ville": "Vous partez en ville...",
    "ouiContinuer": "Bon courage alors !",
    "nonStop": "Dommage, peut-être une autre fois."
};

// Fonction pour gérer les choix et avancer dans l'histoire
function afficherMessage(event) {
    const bouton = event.target;
    const reponseId = bouton.getAttribute("data-reponse");
    const nextQuestionId = bouton.getAttribute("data-next");
    const message = bouton.parentElement.querySelector(".message");

    // Afficher la réponse associée
    if (reponseId && message) {
        message.textContent = reponses[reponseId] || "Réponse inconnue";
        message.style.display = "block";
    }

    // Ajouter une classe spacer pour plus de marge si nécessaire
    if (nextQuestionId) {
        const nextQuestion = document.querySelector(nextQuestionId);
        if (nextQuestion) {
            // Ajouter un espace supplémentaire avec la classe "spacer"
            nextQuestion.classList.add("spacer");

            // Scroll automatique vers la nouvelle section
            nextQuestion.scrollIntoView({ behavior: "smooth" });
        }
    }
}

// Ajouter un événement sur tous les boutons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", afficherMessage);
});
