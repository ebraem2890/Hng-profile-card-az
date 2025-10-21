// For Contact Update
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.querySelector('[data-testid="test-contact-name"]');
  const email = document.querySelector('[data-testid="test-contact-email"]');
  const subject = document.querySelector('[data-testid="test-contact-subject"]');
  const message = document.querySelector('[data-testid="test-contact-message"]');
  const success = document.querySelector('[data-testid="test-contact-success"]');

  let isValid = true;

 document.querySelectorAll('.error').forEach(el => el.textContent = '');
  success.textContent = '';

  if (!name.value.trim()) {
    document.querySelector('[data-testid="test-contact-error-name"]').textContent = 'Full name is required.';
    isValid = false;
  }
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.trim()) {
    document.querySelector('[data-testid="test-contact-error-email"]').textContent = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    document.querySelector('[data-testid="test-contact-error-email"]').textContent = 'Enter a valid email address.';
    isValid = false;
  }
  if(!subject.value.trim()) {
    document.querySelector('[data-testid="test-contact-error-subject"]').textContent = 'Subject is required';
    isValid = false;
  }
  if (!message.value.trim()) {
    document.querySelector('[data-testid="test-contact-error-message"]').textContent = 'Message is required.';
    isValid = false;
  } else if (message.value.trim().length < 10) {
    document.querySelector('[data-testid="test-contact-error-message"]').textContent = 'Message must be at least 10 characters.';
    isValid = false;
  }
  if (isValid) {
    success.textContent = 'Message sent successfully!';
    e.target.reset();
  }
})
