// Menu show or hidden 
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

//Menu Show
if (navToggle) {
    navToggle.addEventListener('click', function () {
        navMenu.classList.add('show-menu');
    })
};

//Menu Hidden
if (navClose) {
    navClose.addEventListener('click', function () {
        navMenu.classList.remove('show-menu');
    })
};

// Accordion Skills
const skillContent1 = document.querySelector('#skill1'),
    skillHeader1 = document.querySelector('#skill1header'),
    skillContent2 = document.querySelector('#skill2'),
    skillHeader2 = document.querySelector('#skill2header');

skillHeader1.addEventListener('click', function () {
    skillContent1.classList.toggle('skills-open');
});

skillHeader2.addEventListener('click', function () {
    skillContent2.classList.toggle('skills-open');
});