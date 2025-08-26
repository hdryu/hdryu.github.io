(function() {
  var themeToggle = document.getElementById('theme-toggle');
  var htmlElement = document.documentElement;

  if (!themeToggle) {
    return;
  }

  // Function to set the theme
  function setTheme(theme) {
    if (theme === 'dark') {
      htmlElement.classList.add('dark-mode');
      themeToggle.innerHTML = '🌙';
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark-mode');
      themeToggle.innerHTML = '☀️';
      localStorage.setItem('theme', 'light');
    }
  }

  // Event listener for the toggle button
  themeToggle.addEventListener('click', function() {
    var isDarkMode = htmlElement.classList.contains('dark-mode');
    setTheme(isDarkMode ? 'light' : 'dark');
  });

  // Initial theme setup
  function initTheme() {
      var savedTheme = localStorage.getItem('theme');
      var preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        setTheme(preferredTheme);
      }
  }

  initTheme();
})();
