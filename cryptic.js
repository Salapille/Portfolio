const navButtons = document.querySelectorAll('.project-nav button');
const slider = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');

navButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    document.querySelector('.project-nav button.active')?.classList.remove('active');
    btn.classList.add('active');

    // Calcul dynamique
    const offset = index * -100;
    slider.style.transform = `translateX(${offset}%)`;
  });
});
