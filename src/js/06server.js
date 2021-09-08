const buttonShare = document.querySelector(".js_button_share");
const parrafoShare = document.querySelector(".js_parrafo_share");
const sectionShare = document.querySelector(".js_share_twitter");
const shareTitle = document.querySelector('.js_sharetitle');
const dataUser = {
  palette: '',
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
};

const form = document.querySelector('.js_form');
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
      sectionShare.classList.remove('hidden');
      if (data.success === true) {
        shareTitle.innerHTML = 'La tarjeta ha sido creada:'
        parrafoShare.innerHTML = data.cardURL;
        parrafoShare.setAttribute('href', data.cardURL);
      } else {
        shareTitle.innerHTML = 'Erorr al crear tarjeta:'
        parrafoShare.innerHTML =
          'Por favor, revise los datos introducidos';
        parrafoShare.removeAttribute('href');
          
      }
    });
}

buttonShare.addEventListener('click', handleCreateBtn);
