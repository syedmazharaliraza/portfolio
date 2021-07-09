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

// Qualification
let education = document.getElementById('education');
let work = document.getElementById('work');
let educationheader = document.getElementById('educationheader');
let workheader = document.getElementById('workheader');
educationheader.style.color = 'var(--first-colour)';

educationheader.addEventListener('click', () => {
    let condition1 = work.classList.contains('qualification-inactive');
    if(!condition1){
        education.classList.remove('qualification-inactive');
        work.classList.add('qualification-inactive');
        workheader.style.color = 'var(--text-colour)';
        educationheader.style.color = 'var(--first-colour)';
    }
});
workheader.addEventListener('click', () => {
    let condition2 = education.classList.contains('qualification-inactive');
    if(!condition2){
        work.classList.remove('qualification-inactive');
        education.classList.add('qualification-inactive');
        educationheader.style.color = 'var(--text-colour)';
        workheader.style.color = 'var(--first-colour)';
    }
});

// Portfolio swiper js
let swiper = new Swiper('.portfolio-container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });