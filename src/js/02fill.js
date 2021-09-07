
// JS Imagen previsualización Jenny

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

function getImage(e){
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}

function fakeFileClick() {
  fileField.click(); 
 }
 
 fileField.addEventListener('change', getImage);

//Acción para el nombre y el trabajo
//variables
const inputTextElements = document.querySelectorAll('.js_inputtext');
const textPreviewElements = document.querySelectorAll('.js_previewtext');
function handlePreviewText() {
  textPreviewElements[0].innerHTML = inputTextElements[0].value;
  textPreviewElements[1].innerHTML = inputTextElements[1].value;
}
for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener('change', handlePreviewText);
}

//ACCIONES PARA LOS LINKS

//variables

const inputCardsLinks = document.querySelectorAll('.js_input_link');
console.log(inputCardsLinks);
const cardPreviewIcons = document.querySelectorAll('.js-icon-circle');

//preventDefault de los enlaces de la tarjeta

function handleClickCardLinks(event) {
  let iconListened = event.currentTarget;
  if (iconListened.href === 'http://localhost:3000/cards.html') {
    iconListened = event.preventDefault();
  }
}
for (const cardPreviewIcon of cardPreviewIcons) {
  cardPreviewIcon.addEventListener('click', handleClickCardLinks);
}

//funcion unica para los links

function handleCardLinks() {
  cardPreviewIcons[1].setAttribute(
    'href',
    'mailto:' + inputCardsLinks[0].value
  );

  cardPreviewIcons[0].setAttribute(
    'href',
    'tel:+34' + inputCardsLinks[1].value
  );

  cardPreviewIcons[2].setAttribute('href', 'https://www.linkedin.com/in/' + inputCardsLinks[2].value);

  

  cardPreviewIcons[3].setAttribute(
    'href',
    'https://github.com/' + inputCardsLinks[3].value
  );
}
for (const inputCardsLink of inputCardsLinks) {
  inputCardsLink.addEventListener('change', handleCardLinks);
}
