document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Get the target section id
        const targetElement = document.getElementById(targetId);

        // Adjust the scroll position by offset (height of navbar, in this case ~4rem or 60px)
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
            behavior: 'smooth'
        });
    });
});
