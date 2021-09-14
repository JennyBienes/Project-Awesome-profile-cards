const resetFormButton = document.querySelector('.js_resetbutton');
/*const inputReset = document.querySelector('.js_form'); 
function handleResetFormButton(){
    inputReset.reset();
}
resetFormButton.addEventListener('click', handleResetFormButton);*/

function handleResetLocalStorage(){
    localStorage.removeItem('dataUser');
    location.reload();
}
resetFormButton.addEventListener('click', handleResetLocalStorage)

/*function handleFavoritesResetBtn(){
    const arrayLength = favoriteShows.length;
    favoriteShows.splice(0,arrayLength);
    localStorage.removeItem('favoriteShows');
    localStorage.removeItem('favoriteSelectedShows');
    removeClassSelected();
    paintFavorites();
  }
  favoritesResetBtn.addEventListener('click', handleFavoritesResetBtn);*/