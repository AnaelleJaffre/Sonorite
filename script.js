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
    "rireEncorePlusSeul" : "Vous aimez bien, rire tout seul, pour aucune raison ?",
    "quelleQuestion" : "C'est quoi cette question, jeune homme ? C'est privé !",
    "vieilleDame" : "Une vieille dame qui n'a rien à faire de vos questions !",
    "pasVuDragon" : "Non, y'a pas de dragon, dans cette ville !",
    "sex" : "Puceau moi ? serieusement ^^ haha on me l avait pas sortie celle la depuis loooongtemps :) demande a mes potes si je suis puceau tu vas voir les reponses que tu vas te prendre XD rien que la semaine passee j ai niquer donc chuuuuut ferme la puceau de merde car oui toi tu m as tout l air d un bon puceau de merde car souvent vous etes frustrer de ne pas BAISER :) ses agreable de se faire un missionnaire ou un amazone avec une meuf hein? tu peux pas repondre car tu ne sais pas ce que c ou alors tu le sais mais tu as du taper dans ta barre de recherche missionnaire sexe ou amazone sexe pour comprendre ce que c etait mdddrrr !! c est grave quoiquil en soit.... pour revenir a moi, je pense que je suis le mec le moins puceau de ma bande de 11 meilleurs amis pas psk j ai eu le plus de rapport intime mais psk j ai eu les plus jolie femme que mes amis :D ses pas moi qui le dit, ses eux qui commente sous mes photos insta trop belle la fille que tu as coucher avec hier en boite notamment! donc apres si tu veux que sa parte plus loi sa peut partir vraiment loi j habite dans la banlieue de niort sa te parle steven sanchez ? ses juste un cousin donc OKLM hahaha on verra si tu parles encore le puceau de merde mdddrrr pk insulter qd on est soi meme puceau tu me feras toujour marrer!!",
    "plombier" : "Oh moi ! Je suis plombier ! Et toi ?",
    "amour" : "Aaah, tu veux que je te raconte mes histoires d'amour ? Bon alors y'a pas grand-chose par ici hein, c'est un peu platonique... J'ai ressenti de la colère,  de la tristesse mais j'ai fais une dépression en 2019 soit 7 ans après ma rupture avec mon ex copine.  Aujourd'hui ça va mieux mais c'est toujours difficile à passer.   Je me suis remis à la magie car j'adore la prestidigitation.  C'est ce qui m'a sauvé.  De me raccrocher à cette passion pour l'art Magique.   Alors que j'étais seul face à cette rupture  je pouvais en parler à personne parce que mes proches s'en foutaient totalement ( ils avaient raisons  même si je leur ai fait un peu la gueule par la suite en pensant que c'était peut-être insignifiant) bref j'ai aimé cette copine je croyais en elle et au final on se sépare. La semaine passée j'avais abordé une femme au téléphone après en se retrouver dans une cave on a parlé dans au sentiment après elle m'a dit que elle va me donner la réponse j'ai entendu pendant 3 jours mais après elle m'a écrit pour me dire si ont peut rester d'abord amis avant de partir dans une relation amoureuse...",
    "pasDeDragon" : "Ah non, y'a pas de dragon, dans cette ville... Par contre, y'a un poulpe énorme qui détruit la ville depuis hier soir ! Il est vers l'Est !",
    "fortEnProgrammation": "Ah super ! Vous allez pouvoir coder un programme pour combattre le monstre !",
    "nulEnProgrammation": "Oh... Peut-être que vous devriez fuir alors !"
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




// -------- Musique d'ascenseur ----------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const musique = document.getElementById("musique");
    const boutonMusique = document.getElementById("toggleMusique");

    boutonMusique.addEventListener("click", () => {
        if (musique.paused) {
            musique.play().catch(e => console.log("Lecture bloquée :", e));
            boutonMusique.textContent = "⏸️ Pause";
        } else {
            musique.pause();
            boutonMusique.textContent = "🎵 Musique !";
        }
    });
});
