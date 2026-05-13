// ===== SMOOTH SCROLL =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// ===== NAVBAR BACKGROUND CHANGE ON SCROLL =====

window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    if (window.scrollY > 50) {

        header.style.background =
            'linear-gradient(135deg, #4c1d95, #831843)';

        header.style.boxShadow =
            '0 4px 20px rgba(0,0,0,0.4)';
    }

    else {

        header.style.background =
            'linear-gradient(135deg, #4c1d95, #831843)';

        header.style.boxShadow = 'none';
    }

});


// ===== CONTACT FORM POPUP MESSAGE =====

const form = document.querySelector('.contact-form');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    // Popup Message

    alert("Message Sent Successfully ");

    // Reset Form

    form.reset();

});