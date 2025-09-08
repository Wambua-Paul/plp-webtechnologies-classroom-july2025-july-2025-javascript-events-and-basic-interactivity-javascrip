// Feature 1: Change background color on button click
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  const colors = ['#e6f7ff', '#e0ffe0', '#fff5e6', '#ffe6f2', '#f2f2f2'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Feature 2: Character count on message box
const messageBox = document.getElementById('messageBox');
const charCount = document.getElementById('charCount');

messageBox.addEventListener('input', () => {
  charCount.textContent = messageBox.value.length;
});

// Form Validation
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('formMessage').value.trim();

  let isValid = true;

  // Validate name
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    isValid = false;
  }

  // Validate email with regex
  const emailPattern = /^[^@ ]+@[^@ ]+\.[^@ ]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email.';
    isValid = false;
  }

  // Validate message length
  if (message.length < 10) {
    document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
    charCount.textContent = '0';
  }
});
