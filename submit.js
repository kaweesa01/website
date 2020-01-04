const butt = document.querySelector('.button');
const comment = document.querySelector('.comment');
const reciver = document.querySelector('.commenter');

function dowork(){
    reciver.classList.add('commenter');
const value = comment.value;
console.log(value);
 const div = document.createElement('div');
 div.textContent = `${value}`;
 console.log(div);
 reciver.insertAdjacentElement('afterend',div)
 reciver.append(div);
 comment.value = " ";
}
butt.addEventListener('click',dowork)
console.log(butt);
