const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange (event) {
    let value = event.currentTarget.value;
    if (value !== '' && value !== ' ') {
        return refs.span.textContent = value;
    }
    return refs.span.textContent = 'Anonymous';
}
