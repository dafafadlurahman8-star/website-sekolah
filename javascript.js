
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '↑ Top';
backToTopBtn.id = 'backToTop';
document.body.appendChild(backToTopBtn);


backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '30px';
backToTopBtn.style.right = '30px';
backToTopBtn.style.padding = '10px 15px';
backToTopBtn.style.fontSize = '18px';
backToTopBtn.style.display = 'none';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.zIndex = '1000';


window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});


backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Mode Gelap';
darkModeToggle.id = 'darkModeToggle';
document.querySelector('header .container').appendChild(darkModeToggle);


darkModeToggle.style.marginLeft = '20px';
darkModeToggle.style.padding = '5px 10px';
darkModeToggle.style.cursor = 'pointer';


darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Mode Terang';
  } else {
    darkModeToggle.textContent = 'Mode Gelap';
  }
});
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9\s\-()+]{7,15}$/;

  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Email tidak valid!';
    formMessage.style.color = 'red';
    return;
  }

  if (!phonePattern.test(phone)) {
    formMessage.textContent = 'Nomor telepon tidak valid!';
    formMessage.style.color = 'red';
    return;
  }

  formMessage.textContent = 'Data berhasil dikirim!';
  formMessage.style.color = 'green';

  form.reset();
});
