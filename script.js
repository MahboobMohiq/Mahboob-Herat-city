function learnMore(section) {
    alert("You are learning more about " + section + "!");
}

// Optional: Smooth scrolling effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});