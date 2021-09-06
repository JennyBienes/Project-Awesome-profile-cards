'use strict';

const contentCollapsable = document.querySelectorAll('.js_content');
const headerCollapsables = document.querySelectorAll('.js_headerCollapsable');

for (const headerCollapsable of headerCollapsables) {
    headerCollapsable.addEventListener('click', handlerCollapsable);
};

function handlerCollapsable(ev) {
  const clickedHeader = ev.currentTarget;
  const clickedContent = clickedHeader.nextElementSibling;
  const arrow = clickedHeader.querySelector('.js_arrow');

    for (const collapsable of contentCollapsable) {
          if (clickedContent === collapsable) {
              collapsable.classList.toggle('hidden');
              collapsable.classList.toggle('div_content');
            arrow.classList.toggle('fa-chevron-down');
              arrow.classList.toggle('fa-chevron-up');
          } else {
              collapsable.classList.add('hidden');
            collapsable.classList.remove('div_content');
         
            
      }
  }
  
}
