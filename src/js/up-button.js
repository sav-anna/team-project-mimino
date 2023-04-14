const scrollBtn = document.querySelector('.up-button');
console.log("scrollBtn:", scrollBtn)
window.onscroll = () => {
  window.scrollY <= 50
    ? scrollBtn.classList.add('is-hidden')
    : scrollBtn.classList.remove('is-hidden');
};