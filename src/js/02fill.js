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
