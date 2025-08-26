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

document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    document.body.appendChild(customCursor);

    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    function addHoverEffect() {
        customCursor.classList.add('hover');
    }

    function removeHoverEffect() {
        customCursor.classList.remove('hover');
    }

    const elementsToHover = ['a', 'textarea', 'input', 'select', 'button'];

    elementsToHover.forEach(element => {
        document.querySelectorAll(element).forEach(link => {
            link.addEventListener('mouseover', addHoverEffect);
            link.addEventListener('mouseout', removeHoverEffect);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".details-button");

    buttons.forEach(button => {
        let clickable = false;
        let timeoutId;

        button.addEventListener("mouseover", function() {
            const opacity = window.getComputedStyle(button).opacity;
            if (opacity == 1) {
                timeoutId = setTimeout(() => {
                    clickable = true;
                }, 300); // 0.3 seconds delay
            } else {
                clickable = false;
            }
        });

        button.addEventListener("mouseleave", function() {
            clearTimeout(timeoutId);
            clickable = false;
        });

        button.addEventListener("mouseout", function() {
            clearTimeout(timeoutId);
            clickable = false;
        });

        button.addEventListener("click", function(event) {
            if (!clickable) {
                event.preventDefault();
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  if (location.pathname.endsWith(".html")) {
    const clean = location.pathname.replace(/\.html$/, "");
    window.history.replaceState(null, "", clean);
  }
});