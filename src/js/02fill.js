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

//Acción para email

const emailElement = document.querySelector(".js_input_mail");
const emailPreviewElement = document.querySelector(".js_mail");


function handleMail() {
  if (emailElement.value !== "") {
    emailPreviewElement.setAttribute('href', 'mailto:'+ emailElement.value);
  
  }
}

emailElement.addEventListener("change", handleMail);

//Acción para linkedin

const linkedinElement = document.querySelector(".js_input_linkedin");
const linkedinPreviewElement = document.querySelector(".js_linkedin");


function handleLinkedin() {
  if (linkedinElement.value !== "") {
    linkedinPreviewElement.setAttribute('href', linkedinElement.value);
  
  }
}

linkedinElement.addEventListener("change", handleLinkedin);

