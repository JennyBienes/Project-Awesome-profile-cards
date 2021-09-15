
const inputColorPalettes = document.querySelectorAll('.input_palette');
const previewSection = document.querySelector('.js-preview');
for (const inputColorPalette of inputColorPalettes) {
  inputColorPalette.addEventListener('click', handleDesignCard);
}

function handleDesignCard(ev) {
  const clikedPalette = ev.currentTarget;
  const selectedPalette = clikedPalette.value;
  previewSection.classList.remove('palette1');
  previewSection.classList.remove('palette2');
  previewSection.classList.remove('palette3');
  previewSection.classList.remove('palette4');
  previewSection.classList.remove('palette5');
  previewSection.classList.add('palette' + selectedPalette);
}

