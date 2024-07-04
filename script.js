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
    onScroll();
    window.addEventListener('scroll', onScroll);
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        let scrollTop = document.documentElement.scrollTop;
        
        if (scrollTop < 70) {
            // Scroll down
            header.style.transform = "translate(-50%, -" + scrollTop + "px)";
        } else {
            // Scroll up
            header.style.transform = "translate(-50%, -70px)";
        }
    });
});
