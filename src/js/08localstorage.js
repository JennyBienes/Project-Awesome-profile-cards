function setObjectInLocalStorage() {
  const transformObjectArray = JSON.stringify(dataUser);
  localStorage.setItem("dataUser", transformObjectArray);
}

function getObjectFromLocalStorage() {
  const localStorageDataUser = localStorage.getItem("dataUser");
  if (localStorageDataUser !== null) {
    const objectArray = JSON.parse(localStorageDataUser);
    dataUser = objectArray;
    handlePreviewText();
    // duda de si tiene que pintar la imagen aqui
    paintCard();
  }
}
getObjectFromLocalStorage();
