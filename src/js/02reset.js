const resetFormButton = document.querySelector('.js_resetbutton');

function handleResetLocalStorage(){
    localStorage.removeItem('dataUser');
    location.reload();
}
resetFormButton.addEventListener('click', handleResetLocalStorage)

