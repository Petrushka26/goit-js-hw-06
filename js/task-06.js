const input = document.querySelector('#validation-input');
const dataLen = Number(input.dataset.length);
input.addEventListener('blur', onInputBlur);

function onInputBlur (event) {
    if (event.currentTarget.value.length === dataLen) {
        event.target.classList.remove('invalid');
         event.target.classList.add('valid');
return;
    } 
    return event.target.classList.add('invalid');
}


