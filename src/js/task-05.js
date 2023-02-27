const findInput = document.querySelector('#name-input');
const findSpan  =   document.querySelector('#name-output')

findInput.addEventListener('input', changeInput);


function changeInput(event) {
    findSpan.textContent = event.target.value.trim();

    if(findSpan.textContent === '') {
        findSpan.textContent = 'Anonymous';
    };
};

