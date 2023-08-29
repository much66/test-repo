let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' })
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' })
ScrollReveal().reveal('.home-content h1,  .about-img', { origin: 'left' })
ScrollReveal().reveal('.home-content p,  .about-content', { origin: 'right' })

var strings = [
    'Halo, Saya adalah seorang web developer dengan keahlian dalam PHP (Laravel, CI4), HTML, CSS (Boostrap). Saya telah mengembangkan berbagai situs web yang responsif dan fungsional menggunakan kerangka kerja Laravel dan CodeIgniter. Dalam setiap proyek, saya selalu berkomitmen untuk menghasilkan kode yang bersih, efisien, dan dapat diperbaiki. Saya percaya bahwa dengan menggunakan kombinasi keterampilan saya, saya dapat menciptakan pengalaman pengguna yang menarik dan intuitif.',
    'Pengalaman saya dalam HTML, Bootstrap, dan CSS memungkinkan saya untuk merancang tampilan yang menarik dan responsif. Saya selalu memperhatikan desain yang estetis dan tata letak yang baik, sambil memastikan kompatibilitas di berbagai perangkat dan browser. Saya percaya bahwa desain visual yang baik merupakan kunci untuk menciptakan situs web yang mengundang dan memikat pengguna.',
    'Selain itu, saya memiliki latar belakang dalam pemrograman yang kuat. Saya belajar dasar-dasar pemrograman di kampus dan terus memperdalam ilmu saya secara otodidak melalui berbagai sumber, termasuk video tutorial di YouTube, sumber belajar online, dan eksplorasi di luar perkuliahan. Saya sangat antusias untuk terus mengembangkan keahlian saya dalam JavaScript dan Node.js, serta mengaplikasikan pengetahuan baru saya untuk meningkatkan kualitas dan fungsionalitas situs web yang saya kembangkan.'
];

var currentIndex = 0;
var paragraphElement = document.getElementById('paragraph');
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');

const typed = new Typed('.multiple-text', {
    strings: ['Front-End Developer', 'Back-End Developer', 'Web Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})

var ptype = new Typed('#paragraph', {
    strings: [strings[currentIndex]],
    typeSpeed: 0.001,
    backSpeed: 0.02,
    loop: false,
    showCursor: false,
    onComplete: function() {
        showNavigationButtons();
    }
});

function showNavigationButtons() {
    if (currentIndex > 0) {
        prevButton.style.display = 'inline';
    }

    if (currentIndex < strings.length - 1) {
        nextButton.style.display = 'inline';
    }
}

function prevParagraph() {
    if (currentIndex === 0) {
        return;
    }

    currentIndex--;
    ptype.reset();
    ptype.strings = [strings[currentIndex]];
    ptype.start();

    nextButton.style.display = 'inline';
    if (currentIndex === 0) {
        prevButton.style.display = 'none';
    }
}

function nextParagraph() {
    if (currentIndex === strings.length - 1) {

        return;
    }

    currentIndex++;
    ptype.reset();
    ptype.strings = [strings[currentIndex]];
    ptype.start();

    prevButton.style.display = 'inline';
    if (currentIndex === strings.length - 1) {
        nextButton.style.display = 'none';
    }
}


startTyping(false);

function checkForm() {
    var fullName = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("number").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var submitButton = document.getElementById("submit");

    if (fullName && email && mobileNumber && subject && message) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

function SendMail() {
    var fullName = document.getElementById('full-name').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('number').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var btn = document.getElementById('submit');

    var params = {
        from_name: fullName,
        email_id: email,
        message: message,
        subject: subject,
        number: mobileNumber
    };

    if (fullName && email && mobileNumber && subject && message) {
        emailjs.send("service_m1jkmdv", "template_w5xojmm", params).then(function(res) {
            alert("Email berhasil dikirim!");
        });
    } else {
        btn.disabled;
    }
}