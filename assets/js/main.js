// Show and hide mobile menu constants
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// Show mobile menu
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Hide mobile menu
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Hide mobile menu when a link is clicked
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Accordion skills
const skillsContent = document.getElementsByClassName('skills-content')
const skillsHeader = document.querySelectorAll('.skills-header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills-content skills-close'
    }

    if (itemClass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open'
    }
}

skillsHeader.forEach(elem => {
    elem.addEventListener('click', toggleSkills)
})

// Qualification tabs
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification-active')
        })

        target.classList.add('qualification-active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification-active')
        })

        tab.classList.add('qualification-active')
    })
})

// Services Modal
const modalViews = document.querySelectorAll('.services-modal')
const modalButtons = document.querySelectorAll('.services-button')
const modalCloses = document.querySelectorAll('.services-modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalButtons.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

// Portfolio Swiper
let swiperPortfolio = new Swiper(".portfolio-container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// Testimonial Swiper
let swiperTestimonial = new Swiper(".testimonial-container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
});

// Scroll sections active link
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// Change header background
function scrollHeader() {
    const nav = document.getElementById('header')

    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header')
    } else {
        nav.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader)

// Show scroll top
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')

    // When the scroll is higher than 560 viewport height, add the show-scroll class to the tag with the scroll-top class
    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp)

// Dark/Light Theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate/deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
