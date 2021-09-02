'use strict';

const contentCollapsable = document.querySelectorAll('.js_content');
const headerCollapsables = document.querySelectorAll('.js_headerCollapsable');

for (const headerCollapsable of headerCollapsables) {
    headerCollapsable.addEventListener('click', handlerCollapsable);
}

function handlerCollapsable(ev) {
    const clickedHeader = ev.currentTarget;
    const clickedContent = clickedHeader.nextElementSibling;
    console.log(clickedContent);
    // clickedContent.classList.toggle('hidden');

    for (const collapsable of contentCollapsable) {
        // debugger;
          if (clickedContent === collapsable) {
              collapsable.classList.remove('hidden');
          } else {
              collapsable.classList.add('hidden');
      }
  }

}

headerCollapsable.addEventListener('click', handlerCollapsable);