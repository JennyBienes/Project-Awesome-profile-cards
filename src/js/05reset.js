const resetFormButton = document.querySelector('.js_resetbutton');
const inputReset = document.querySelector('.js_form'); 
function handleResetFormButton(){
    inputReset.reset();
}
resetFormButton.addEventListener('click', handleResetFormButton);

