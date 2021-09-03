'use strict';

const contentCollapsable = document.querySelectorAll('.js_content');
const headerCollapsables = document.querySelectorAll('.js_headerCollapsable');

for (const headerCollapsable of headerCollapsables) {
    headerCollapsable.addEventListener('click', handlerCollapsable);
}

function handlerCollapsable(ev) {
    const clickedHeader = ev.currentTarget;
    const clickedContent = clickedHeader.nextElementSibling;
    // clickedContent.classList.toggle('hidden');
    console.log(clickedHeader);
    console.log(clickedContent);

    for (const collapsable of contentCollapsable) {
        // debugger;
          if (clickedContent === collapsable) {
              collapsable.classList.toggle('hidden');
               collapsable.classList.toggle('div_content');
          } else {
              collapsable.classList.add('hidden');
              collapsable.classList.remove('div_content');
      }
  }
}


// headerCollapsable.addEventListener('click', handlerCollapsable);