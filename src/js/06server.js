// const dataUser = {
//     palette: '',
//     name: '',
//     work: '',
//     email: '',
//     phone: '',
//     linkedin: '',
//     github: '',
//     photo: '',
// };

// const form = document.querySelector('.js_form');
// function handlerFormData(ev){ 
//     const inputId = ev.target.id;
//     const inputValue = ev.target.value;
//     console.log(inputId, inputValue);
    
//     dataUser[inputId] = inputValue;
//     console.log(dataUser);
// }
   
// form.addEventListener('change', handlerFormData);


// function handleCreateBtn(ev)
// ev.preventdDefault();
// fetch('https://awesome.profile-cards.herokuapp.com/card', {
//     method: 'POST',
//     body: JSON.stringify(dataUser),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         elementodondepintar.innerHTML = data.cardURL;
//         // Hacer validacion si succes es = true te pinta si no poner mensaje de error
//         // Invocar funcion que pinte el HTML (le quite la clase hidden y pinte el mensaje)
//         //paintTwitter();
// })