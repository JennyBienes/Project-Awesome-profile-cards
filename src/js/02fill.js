'use strict';
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
    console.log(jobElement.getAttribute('href'));
    jobPreviewElement.innerHTML = jobElement.value;
  }
}

jobElement.addEventListener('change', handleJob);

//ACCIONES PARA LOS LINKS

//variables
const phoneElement = document.querySelector('.js_input_phone');
const phonePreviewElement = document.querySelector('.js_phone');
const emailElement = document.querySelector('.js_input_mail');
const emailPreviewElement = document.querySelector('.js_mail');
const linkedinElement = document.querySelector('.js_input_linkedin');
const linkedinPreviewElement = document.querySelector('.js_linkedin');
const githubElement = document.querySelector('.js_input_github');
const githubPreviewElement = document.querySelector('.js_github');

//accion para el telefono

function handlePhone() {
  if (phoneElement.value !== '') {
    phonePreviewElement.setAttribute('href', 'tel:' + githubElement.value);
  }
}

phoneElement.addEventListener('change', handlePhone);

//Acción para email

function handleMail() {
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
githubElement.addEventListener('change', handleGithub);

//preventDefault de los enlaces de la tarjeta, hacer solo una funcion y un listener!!!!!

function handleClickCardLinks(event) {
  if (phoneElement.value === '') {
    event.preventDefault();
  }
}
function handleClickCardLinks(event) {
  if (emailElement.value === '') {
    event.preventDefault();
  }
}
function handleClickCardLinks(event) {
  if (linkedinElement.value === '') {
    event.preventDefault();
  }
}
function handleClickCardLinks(event) {
  if (githubElement.value === '') {
    event.preventDefault();
  }
}
phonePreviewElement.addEventListener('click', handleClickCardLinks);
emailPreviewElement.addEventListener('click', handleClickCardLinks);
linkedinPreviewElement.addEventListener('click', handleClickCardLinks);
githubPreviewElement.addEventListener('click', handleClickCardLinks);
