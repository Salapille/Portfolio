// Fonction pour afficher un projet
function openProject(projectName) {
    alert('Vous avez cliqué sur ' + projectName);
}

// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi réel du formulaire
    alert('Merci de nous avoir contacté !');
    // Vous pouvez ajouter ici une logique d'envoi de formulaire réel si nécessaire
});
