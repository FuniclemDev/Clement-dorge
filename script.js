// Fonction pour afficher les informations du projet au survol
function showProjectInfo(element) {
    element.querySelector('.project-info').style.opacity = '1';
}

// Fonction pour masquer les informations du projet lorsque le survol est terminé
function hideProjectInfo(element) {
    element.querySelector('.project-info').style.opacity = '0';
}
