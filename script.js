function showPage(pageName) {
  var allPages = document.querySelectorAll('.page');
  allPages.forEach(function(page) {
    page.classList.add('hidden');
  });

  // Show only the page we want
  document.getElementById('page-' + pageName).classList.remove('hidden');

  // Update which nav link looks active
  var allLinks = document.querySelectorAll('.nav-btn');
  allLinks.forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === pageName) {
      link.classList.add('active');
    }
  });

  // Scroll back to top
  window.scrollTo(0, 0);
}

// Run showPage when a nav link is clicked
var allLinks = document.querySelectorAll('.nav-btn');
allLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    showPage(link.getAttribute('data-page'));
  });
});

function submitForm() {
  var name    = document.getElementById('name').value.trim();
  var email   = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    document.getElementById('form-error').classList.remove('hidden');
    return;
  }

  document.getElementById('form-error').classList.add('hidden');
  document.getElementById('contact-form').classList.add('hidden');
  document.getElementById('form-success').classList.remove('hidden');
}