/* 
Objetivo 1 - Quando clicar no botão Ver Trailer é para abrir o modal para ver o video.
  - Pegar o Elemento no HTML do botão para usar no JS.
  - Identificar o quando o usuário clicar no botão.
  - Pegar o Elemento da modal no JS.
  - Abrir a modal na tela.

Objetivo 2 - Quando clicar no X na modal é para fazer ela fechar.
  - Pegar o elemento que fecha a modal usando JS.
  - Identificar  quando o usuario clicar no X.
  - Fechar a modal.
*/

//1
document.querySelector(".botao-trailer")
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFechar = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");

botaoTrailer.addEventListener("click", () => {
  modal.classList.add("aberto")
  video.setAttribute("src", "https://www.youtube.com/embed/Cb4WV4aXBpk")
});

//2 
botaoFechar.addEventListener("click", () => {
  modal.classList.remove("aberto")
  video.setAttribute("src", "")
});






