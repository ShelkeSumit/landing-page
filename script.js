
    // Mobile Navbar Toggle
    document.querySelector('.menu-toggle').addEventListener('click', function () {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    // Animation for Testimonials (Fade-in on Scroll)
    document.addEventListener("scroll", function () {
        let testimonials = document.querySelectorAll('.testmo-cards');
        testimonials.forEach((card) => {
            let rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                card.classList.add("show");
            }
        });
    });

