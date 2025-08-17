// Dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.createElement('button');
  darkModeToggle.textContent = '🌙 Dark Mode';
  darkModeToggle.className = 'dark-mode-toggle';
  
  darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      darkModeToggle.textContent = '☀️ Light Mode';
      localStorage.setItem('darkMode', 'enabled');
    } else {
      darkModeToggle.textContent = '🌙 Dark Mode';
      localStorage.setItem('darkMode', 'disabled');
    }
  });
  
  // Check for saved preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️ Light Mode';
  }
  
  document.body.appendChild(darkModeToggle);
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});