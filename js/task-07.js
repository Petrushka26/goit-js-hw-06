const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', onInputChange);

function onInputChange (event) {
text.style.fontSize = event.target.value + 'px';
// console.log(event.target.value)
// console.dir(event);
}
