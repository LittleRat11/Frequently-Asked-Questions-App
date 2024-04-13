const faq = document.querySelectorAll('.content-container');
for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
};