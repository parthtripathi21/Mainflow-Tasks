// script.js

document.querySelectorAll('nav ul li a').forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.textShadow = '0 0 20px rgba(255, 255, 0, 0.8)';
    });
    element.addEventListener('mouseout', () => {
        element.style.textShadow = 'none';
    });
});
