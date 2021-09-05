"use strict";
//Acción para el nombre///
const nameElement = document.querySelector(".js_name");
const namePreviewElement = document.querySelector(".js_name_cards");
function handleName() {
  if (nameElement.value !== "") {
    console.log(nameElement.value);
    namePreviewElement.innerHTML = nameElement.value;
  }
}
nameElement.addEventListener("change", handleName);

//Acción para trabajo//
const jobElement = document.querySelector(".js_input_job");
const jobPreviewElement = document.querySelector(".js_job");
function handleJob() {
  if (jobElement.value !== "") {
    console.log(jobElement.getAttribute("href"));
    jobPreviewElement.innerHTML = jobElement.value;
  }
}

jobElement.addEventListener("change", handleJob);

//acción para añadir imagen y previsualizarla en la tarjeta
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



//Acción para email//
const emailElement = document.querySelector(".js_input_mail");
const emailPreviewElement = document.querySelector(".js_mail");
function handleMail() {
  if (emailElement.value !== "") {
    console.log(emailElement.getAttribute("href"));
    emailPreviewElement.getAttribute ('href') += emailElement.value;
  }
}

emailElement.addEventListener("change", handleMail);
