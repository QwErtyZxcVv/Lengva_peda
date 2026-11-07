const modal = document.getElementById('contactModal');
const openBtns = document.querySelectorAll('.open-modal-btn');
const closeBtn = document.getElementById('closeModal');

openBtns.forEach(btn => {
  btn.addEventListener('click', () => modal.classList.add('active'));
});

closeBtn.addEventListener('click', () => modal.classList.remove('active'));

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});

function switchLang(lang, event) {
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  const elements = document.querySelectorAll('[data-lt]');
  elements.forEach(el => {
    if (lang === 'ua') {
      el.textContent = el.getAttribute('data-ua');
    } else {
      el.textContent = el.getAttribute('data-lt');
    }
  });
}