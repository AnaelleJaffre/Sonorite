// Base de données des réponses
const reponses = {
    "cestNul": "C'est nul...",
    "moiNonPlus": "Moi non plus...",
    "foret": "Soit, c'est chill la forêt. Mais attention, des monstres pourraient vous dévorer. C'est bien connu.",
    "ville": "Éviemment, en ville on prend pas trop de risques... C'est sûr que c'est pas là-bas que vous allez subir une attaque zombie !",
    "ouiContinuer": "Bon courage alors !",
    "dommageAutreFois": "Dommage, peut-être une autre fois."
};

// Fonction pour gérer les choix et avancer dans l'histoire
function afficherMessage(event) {
    const bouton = event.target;
    const reponseId = bouton.getAttribute("data-reponse");
    const nextQuestionId = bouton.getAttribute("data-next");
    const message = bouton.parentElement.querySelector(".message");

    // Afficher la réponse associée du narrateur
    if (reponseId && message) {
        message.textContent = reponses[reponseId] || "(le narrateur n'a actuellement pas envie de vous répondre.)";
        message.style.display = "block";
    }

    // Gérer la navigation et le scroll automatique vers la prochaine section
    if (nextQuestionId) {
        const nextQuestion = document.querySelector(nextQuestionId);
        if (nextQuestion) {
            // Scroll automatique vers la nouvelle section
            nextQuestion.scrollIntoView({ behavior: "smooth" });
        }
    }
}

// Ajouter un événement sur tous les boutons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", afficherMessage);
});
