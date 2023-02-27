

let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const spanCounter = document.querySelector('#value')

console.log(incrementBtn.dataset);

decrementBtn.addEventListener('click', onDecrementCounter);
incrementBtn.addEventListener('click', onIncrementCounter);


function onDecrementCounter() {
    counterValue -= 1;
    spanCounter.textContent =counterValue;
};

function onIncrementCounter() {
    counterValue += 1;
    spanCounter.textContent =counterValue;
};