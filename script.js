document.addEventListener('DOMContentLoaded', () => {
    const togglebtn = document.querySelector('.toggle-btn');
    const dropmenu = document.querySelector('.drop-menu');

    togglebtn.onclick = function () {
        dropmenu.classList.toggle('open');
    };
});
