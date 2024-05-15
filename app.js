const toggler = document.getElementById('switch');

toggler.addEventListener('click', () => {
    toggler.checked ? (document.body.style.backgroundColor = "#252525") : (document.body.style.backgroundColor = "#f2f2f2");
});