'use strict';

const contentCollapsable = document.querySelectorAll('.js_content');
const headerCollapsables = document.querySelectorAll('.js_headerCollapsable');

for (const headerCollapsable of headerCollapsables) {
    headerCollapsable.addEventListener('click', handlerCollapsable);
}

function handlerCollapsable(ev) {
    const clickedHeader = ev.currentTarget;
    const clickedContent = clickedHeader.parentNode;
    console.log(clickedContent);
    clickedContent.classList.toggle('hidden');

  
//     for (const collapsable of contentCollapsable) {
//         if (clickedContent === collapsable) {
//             clickedContent.classList.toggle('hidden');
//             console.log('uy')
//         } else {
//             clickedContent.classList.toggle('hidden');
//             console.log('Ey')
//     }
// }

}

// headerCollapsable.addEventListener('click', handlerCollapsable);