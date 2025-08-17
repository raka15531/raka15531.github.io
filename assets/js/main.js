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

// Scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Parallax effect for hero image
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelector('.hero-image').style.transform = 
      `translateY(${scrollY * 0.3}px)`;
  });
});
