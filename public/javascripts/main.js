const story = document.querySelector('.story-container');
const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
  });
});
