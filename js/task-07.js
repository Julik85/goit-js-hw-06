
const changeFontSize = document.querySelector('#font-size-control');
const changeText = document.querySelector('#text');


changeFontSize.addEventListener('input', (event) => {
   
    changeText.style.fontSize = event.target.value +'px';
})
