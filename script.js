const menuToggle3 = document.getElementById('menuToggle');
const navLinks3 = document.getElementById('navLinks');

if (menuToggle3 && navLinks3) {
  menuToggle3.addEventListener('click', () => {
    navLinks3.classList.toggle('active');
  });

  navLinks3.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks3.classList.remove('active'));
  });
}
