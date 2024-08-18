// Menu Icon and Navbar Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Active Navigation Link
let navlinks = document.querySelectorAll('header nav a');
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    navlinks.forEach(link => {
        link.classList.remove('active');
    });

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Sticky Header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Reset menu icon and navbar state
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// EmailJS Integration
emailjs.init('18O_2-jllSpPY4KzO');

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const formData = {
        from_name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('messageText').value
    };

    
    emailjs.send('service_mq6rmak', 'template_812rjvh', formData)
        .then(function (response) {
            alert('Message sent successfully!');
        }, function (error) {
            console.error('Error sending email:', error);
            alert('Error sending message. Please try again later.');
        });
});
