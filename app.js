const buttonEl = document.querySelector('button');
const wrapper = document.querySelector('.modal-wrapper');
const closeEl = document.querySelector('.modal-close');
const form = document.querySelector('form');
const successEl = document.querySelector('.success-wrapper');

buttonEl.addEventListener('click', () => {
  wrapper.style.display = 'Block';
});

closeEl.addEventListener('click', () => {
  wrapper.style.display = 'none';
});

wrapper.addEventListener('click', (e) => {
  if (e.target.className === 'modal-wrapper') {
    wrapper.style.display = 'none';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  wrapper.style.display = 'none';
  successEl.style.display = 'block';
  setTimeout(() => {
    successEl.style.display = 'none';
  }, 3000);
});
