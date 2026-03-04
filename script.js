// Switch between pages
function showPage(pageName) {

  // Hide all pages
  document.querySelectorAll('.page').forEach(function(page) {
    page.classList.add('hidden');
  });

  // Show the selected page
  document.getElementById('page-' + pageName).classList.remove('hidden');

  // Update active nav link highlight
  document.querySelectorAll('.nav-btn').forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === pageName) {
      link.classList.add('active');
    }
  });

  window.scrollTo(0, 0);
}

// Contact form validation
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