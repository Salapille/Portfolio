// Fonction pour afficher un projet
function openProject(projectName) {
    window.location.href = projectName
}
// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Emp�che l'envoi r�el du formulaire
    alert('Merci de nous avoir contact� !');
    // Vous pouvez ajouter ici une logique d'envoi de formulaire r�el si n�cessaire
});