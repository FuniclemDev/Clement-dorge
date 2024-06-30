// Fonction pour afficher les informations du projet au survol
function showProjectInfo(element) {
    element.querySelector('.project-info').style.opacity = '1';
}

// Fonction pour masquer les informations du projet lorsque le survol est terminé
function hideProjectInfo(element) {
    element.querySelector('.project-info').style.opacity = '0';
}

document.addEventListener('DOMContentLoaded', () => {
    const presentationSection = document.querySelector('.presentation');

    const onScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const presentationPosition = presentationSection.offsetTop;

        if (scrollPosition > presentationPosition) {
            presentationSection.classList.add('visible');
        } else {
            presentationSection.classList.remove('visible');
        }
    };

    // Initial check in case the section is already in view
    onScroll();

    // Add scroll event listener
    window.addEventListener('scroll', onScroll);
});
