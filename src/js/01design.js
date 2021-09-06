const inputColorPalettes = document.querySelectorAll(".input_palette");

const nameCards = document.querySelector(".js_name_cards");
const selectIcon = document.querySelectorAll(".js-icon");
const sidebar = document.querySelector(".main__cards--section__sidebar");
const iconCircle = document.querySelectorAll(".js-icon-circle");
const previewSection = document.querySelector(".js-preview");
// const checked = document.querySelector("#color_pallete_1");
// checked.setAttribute("checked", true);
// console.log(checked);



for (const inputColorPalette of inputColorPalettes) {
  inputColorPalette.addEventListener("click", handleDesignCard);
}

function handleDesignCard(ev) {
  const clikedPalette = ev.currentTarget;
  const selectedPalette = clikedPalette.value;
  console.log(selectedPalette);
  previewSection.classList.remove("palette1");
  previewSection.classList.remove("palette2");
  previewSection.classList.remove("palette3");
  previewSection.classList.add("palette" + selectedPalette);
}

