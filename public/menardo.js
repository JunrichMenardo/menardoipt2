document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent the page from jumping

      // Remove 'active' from all nav links
      navLinks.forEach(l => l.classList.remove('active'));

      // Add 'active' to the clicked nav link
      e.target.classList.add('active');

      // Hide all sections
      sections.forEach(section => section.classList.remove('active'));

      // Show the section corresponding to clicked link
      const targetId = e.target.getAttribute('href').substring(1);
      document.getElementById(targetId).classList.add('active');
    });
  });
});
