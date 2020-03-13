// Your code goes here

// #1 mouse enter changes nav text color to purple

const nav = document.querySelectorAll('a');
nav.forEach((a) => {
    a.addEventListener('mouseenter', (event) => {
        event.target.style.color = 'purple';
        event.stopPropagation();
    });
});

// #2 mouse leave changes nav text color back to black

nav.forEach((a) => {
    a.addEventListener('mouseleave', (event) => {
        event.target.style.color = 'black';
        event.stopPropagation();
    });
});

// #3 clicking on any image will make it black and white

const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
    img.addEventListener('click', (event) => {
        event.target.style.filter = 'grayscale(100%)';
    });
});

// #4 double clicking on the images will restore it to the original color

imgs.forEach((img) => {
    img.addEventListener('dblclick', (event) => {
        event.target.style.filter = 'none';
    });
});

// #5 Resizing the window changes the nav and body background colors to gradient colors

const body = document.querySelector('body');
const navBar = document.querySelector('.main-navigation');
const footer = document.querySelector('footer');

window.addEventListener('resize', (event) => {
    body.style.background = 'linear-gradient(to right, #ff6e7f, #bfe9ff)';
    navBar.style.background =  'linear-gradient(to right, #77a1d3, #79cbca, #e684ae)';
    footer.style.background =   'linear-gradient(to right, #77a1d3, #79cbca, #e684ae)';
});

//#6 Using the mouse wheel over the h2 elements will increase the font size

const h2Size = document.querySelectorAll('h2');
    h2Size.forEach((h2) => {
        h2.addEventListener('wheel', (event) => {
            event.target.style.fontSize = '5rem';
        });
    });


// #7 Alerts when you copy any text

body.addEventListener('copy', (event) => {
    const copiedText = document.getSelection();
    alert(`You copied: '${copiedText}'`);
});

// #8 Alerts when you press any key

document.addEventListener('keydown', (event) => {
    alert(`You pressed: '${event.key}'`);
});

// #9 Putting the mouse over images scales the size up and adds a border radius

imgs.forEach((img) => {
    img.addEventListener('mouseover', (event) => {
        event.target.style.transform = 'scale(1.1)';
        event.target.style.transition = 'all 0.3s';
        event.target.style.borderRadius = '1.5rem';

    });
});

// #10 Taking the mouse off an image reverts the size to normal and removes the border radius

imgs.forEach((img) => {
    img.addEventListener('mouseleave', (event) => {
        event.target.style.transform = 'scale(1)';
        event.target.style.borderRadius = '0';
    });
});

// Stop nav links from refreshing the page


const navLinks = document.querySelectorAll('a > .nav-link');
    navLinks.addEventListener('click', (event) => {
        event.preventDefault();
    });







