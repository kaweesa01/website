const img = document.querySelector('.image_design');
function enlarge(){
    img.classList.toggle('enlarge')
}
img.addEventListener('click',enlarge);