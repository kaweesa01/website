const bar = document.querySelector('.back');
const backdrop = document.querySelector('.backdrop');
const innermodel = document.querySelector('.inner_model');

function Addbackdrop() {
    backdrop.classList.toggle('open');
    innermodel.classList.toggle('open');
}

function removemodel() {
    backdrop.classList.remove('open');
    innermodel.classList.remove('open');
}
bar.addEventListener('click',Addbackdrop)
innermodel.addEventListener('click',removemodel);

