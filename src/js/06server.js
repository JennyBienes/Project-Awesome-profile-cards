const buttonShare = document.querySelector(".js_button_share");
const parrafoShare = document.querySelector(".js_parrafo_share");
const sectionShare = document.querySelector(".js_share_twitter");
const dataUser = {
  palette: "1",
  name: "",
  job: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  photo: "",
};
const form = document.querySelector(".js_form");
function handlerFormData(ev) {
  const inputId = ev.target.id;
  const inputValue = ev.target.value;
  console.log(inputId, inputValue);
  dataUser[inputId] = inputValue;
  console.log(dataUser);
}
form.addEventListener("change", handlerFormData);

function handleCreateBtn(ev) {
  ev.preventDefault();
  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    body: JSON.stringify(dataUser),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === true) {
        sectionShare.classList.remove("hidden");
        parrafoShare.innerHTML = data.cardURL;
      } else {
        parrafoShare.innerHTML =
          "Error al crear la tarjeta, por favor revise los datos introducidos";
      }
    });
}

buttonShare.addEventListener("click", handleCreateBtn);
