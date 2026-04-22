const menuToggle2 = document.getElementById('menuToggle');
const navLinks2 = document.getElementById('navLinks');

if (menuToggle2 && navLinks2) {
  menuToggle2.addEventListener('click', () => {
    navLinks2.classList.toggle('active');
  });

  navLinks2.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks2.classList.remove('active'));
  });
}
