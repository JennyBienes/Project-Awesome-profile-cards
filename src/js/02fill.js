//Acción para el nombre///
const nameElement = document.querySelector('.js_name');
const namePreviewElement = document.querySelector('.js_name_cards');
function handleName() {
  if (nameElement.value !== '') {
    console.log(nameElement.value);
    namePreviewElement.innerHTML = nameElement.value;
  }
}
nameElement.addEventListener('change', handleName);

//Acción para trabajo//
const jobElement = document.querySelector('.js_input_job');
const jobPreviewElement = document.querySelector('.js_job');
function handleJob() {
  if (jobElement.value !== '') {
    jobPreviewElement.innerHTML = jobElement.value;
  }
}

jobElement.addEventListener('change', handleJob);

//ACCIONES PARA LOS LINKS

//variables
const inputCardsLinks = document.querySelectorAll('.js_input_link');
console.log(inputCardsLinks);
const cardPreviewIcons = document.querySelectorAll('.js-icon-circle');
const mobileLink = document.getElementById('mobile_link');
const mailLink = document.getElementById('mail_link');
const linkedinLink = document.getElementById('linkedin_link');
const githubLink = document.getElementById('github_link');


//preventDefault de los enlaces de la tarjeta, hacer solo una funcion y un listener!!!!!

function handleClickCardLinks(event) {
  let iconListened = event.currentTarget;
  if (iconListened.href === "http://localhost:3000/cards.html") {
    iconListened = event.preventDefault();
  }
}
for (const cardPreviewIcon of cardPreviewIcons) {
  cardPreviewIcon.addEventListener('click', handleClickCardLinks);
}

//funcion unica para los links

function handleCardLinks(event) {
  let linkToWrite = event.currentTarget.value;
    if (linkToWrite !== '') {
      mobileLink.setAttribute('href', 'tel:' + linkToWrite);
      mailLink.setAttribute('href', 'mailto:' + linkToWrite);
      linkedinLink.setAttribute('href', linkToWrite);
      githubLink.setAttribute('href', linkToWrite);
    }

}
for (const inputCardsLink of inputCardsLinks) {
  inputCardsLink.addEventListener('change', handleCardLinks);
}

//fin de funcion  unica para los links

//Acción para email

/*function handleMail() {
  if (emailElement.value !== '') {
    emailPreviewElement.setAttribute('href', 'mailto:' + emailElement.value);
  }
}
emailElement.addEventListener('change', handleMail);

//Acción para linkedin

function handleLinkedin() {
  linkedinPreviewElement.event.preventDefault();
  if (linkedinElement.value === '') {
    linkedinPreviewElement.setAttribute('href', linkedinElement.value);
  }
}
linkedinElement.addEventListener('change', handleLinkedin);

//Acción para github

function handleGithub() {
  if (githubElement.value !== '') {
    githubPreviewElement.setAttribute('href', githubElement.value);
  }
}
githubElement.addEventListener('change', handleGithub);*/
