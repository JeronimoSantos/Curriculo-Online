const containerDark = document.querySelector('.container-dark');
const buttonDark = document.querySelector('.button-dark');

buttonDark.onclick = function() {
    this.classList.toggle('active');
    containerDark.classList.toggle('active');
}
 