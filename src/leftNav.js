
const leftNav = document.querySelector('.app-left-bar');

leftNav.addEventListener('mouseover', function() {
  leftNav.classList.add('open');
});

leftNav.addEventListener('mouseout', function() {
  leftNav.classList.remove('open');
});
