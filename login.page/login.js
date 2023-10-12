document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.menu-button');
    const nav = document.querySelector('.main-menu');
    const icon = document.querySelector('.icon');
    
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        nav.classList.toggle('active');
        icon.classList.toggle('active');
    });
  });
