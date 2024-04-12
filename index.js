const button = document.querySelector('#btn');
const hello = document.querySelector('#hello');

button.addEventListener('click', () => {
  if (hello.classList.contains('hidden')) {
    hello.classList.remove('hidden');
    hello.classList.add('block');
  } else {
    hello.classList.remove('block');
    hello.classList.add('hidden');
  }
});