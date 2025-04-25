document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;

    function scrollToSection(index) {
        sections.forEach((section, i) => {
            section.style.transform = `translateY(${(i - index) * 100}vh)`;
        });
    }

    scrollToSection(currentSection);

    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            currentSection = Math.min(currentSection + 1, sections.length - 1);
        } else {
            currentSection = Math.max(currentSection - 1, 0);
        }
        scrollToSection(currentSection);
    });

    document.getElementById('proposalButton').addEventListener('click', () => {
        alert("Yay! Can't wait to make memories together!");
    });
});