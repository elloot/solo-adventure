// make the signs base connect to the bottom of the screen
const sign = document.querySelector('.sign-board');
const signTop = sign.getBoundingClientRect().top;
const signBase = document.querySelector('.sign-stand__base');

signBase.style.height = (window.innerHeight - (signTop + sign.clientHeight)) + 'px';

// animates sign-board contents when a link is pressed
const story = document.querySelector('.story-container');
const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const clickedLink = e.currentTarget;
    const url = clickedLink.href;

    story.classList.add('flying-out');
    for (let i = 0; i < links.length; i++) {
      links[i].classList.add('flying-out');
    }

    clickedLink.addEventListener('animationend', (e) => {
      window.location.href = url;
    });
  });
});
