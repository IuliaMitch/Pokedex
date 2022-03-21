let button;
let h4;
let section = document.querySelector("section#cadastro");
let imagem = document.querySelector("#imagem");
let tipo = document.querySelector("#tipo")
const form = document.querySelector("form");

const createDiv = function () {
  const div = document.createElement("div");
  return div;
};
const div = createDiv();
const createH4 = function () {
  const h4 = document.createElement("h4");
  return h4;
};
const createButton = function () {
  const button = document.createElement("button");
  return button;
};


const create = function () {
    h4 = createH4();
    button = createButton();
    h4.innerHTML = "Formulário Enviado com sucesso!";
    button.innerHTML = "X";
    div.appendChild(h4);
    div.appendChild(button);
    button.classList.add("remover");
    div.classList.add("mensagem");
    section.appendChild(div);
    seg = 0;
  };

const remove = function() {
    section.removeChild(div);
    div.removeChild(h4);
    div.removeChild(button);
}
let seg;

let timer;
function startTime() {
  timer = setInterval(() => {
    seg++;
    console.log(seg);
    if (seg == 5) {
      clearInterval(timer);
      remove()
    }
  }, 1000);
}


let teste = 0;
  document.addEventListener("click", (e) => {
    const button = e.target;
    if (tipo.value.length > 1 && imagem.value.length > 7 && teste == 0) {
        
        console.log(teste);
        if (button.classList.contains("form")) {
          create();
          startTime();
        }
        if (button.classList.contains("remover")|| seg >= 5) {
          clearInterval(timer);
          remove();
        }
      }
  });

