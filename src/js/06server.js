let data = {
    palette: '',
    name: '',
    work: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo: '',
};

const form = document.querySelector('.js_form');
function handlerFormData(ev){ 
    const inputId = ev.target.id;
    const inputValue = ev.target.value;
    console.log(inputId, inputValue);
    
    data[inputId] = inputValue;
    console.log(data);
}
   
form.addEventListener('change',handlerFormData)