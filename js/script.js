let queryParams = new URLSearchParams(window.location.search);
let numeroPatinhos = queryParams.get("numeroPatinhos");
if (numeroPatinhos <= 0 || !Number.isInteger(parseFloat(numeroPatinhos)))
  window.location.href = '../index.html';

animarPatinhos(numeroPatinhos, false);

let numeroVerso = 1;
let numeroVersoCantando = 1;
while (numeroPatinhos > 0) {
  let refrao1, refrao2, refrao3, refrao4, refrao5, refrao6, refrao7, refrao8;
  if (numeroPatinhos > 1) {
    refrao1 = `${numeroPatinhos} patinhos`;
    refrao2 = `foram passear`;
  } else {
    refrao1 = `${numeroPatinhos} patinho`;
    refrao2 = `foi passear`;
  }
  refrao3 = `Além das montanhas`
  refrao4 = `Para brincar`
  refrao5 = `A mamãe gritou`;
  refrao6 = `Quá, quá, quá, quá`;
  if (numeroPatinhos > 2) {
    refrao7 = `Mas só ${--numeroPatinhos} patinhos`;
    refrao8 = `voltaram de lá`;
  } else if (numeroPatinhos == 2) {
    refrao7 = `Mas só ${--numeroPatinhos} patinho`;
    refrao8 = `voltou de lá`;
  }
  else {
    refrao7 = `Mas nenhum patinho`;
    refrao8 = `voltou de lá`;
    numeroPatinhos--;
  }
  console.log(refrao1);
  console.log(refrao2);
  console.log(refrao3);
  console.log(refrao4);
  console.log(refrao5);
  console.log(refrao6);
  console.log(refrao7);
  console.log(refrao8);
  const textoMusica = document.getElementById("textoMusica");
  if (numeroVerso === 1)
    textoMusica.innerHTML += 
      `<div id="verso${numeroVerso++}" class="versoMusica versoCantando">${refrao1}</div>`;
  else
  textoMusica.innerHTML += 
    `<div id="verso${numeroVerso++}" class="versoMusica">${refrao1}</div>`;
  textoMusica.innerHTML += 
    `<div id="verso${numeroVerso++}" class="versoMusica">${refrao2}</div>`;
  textoMusica.innerHTML += 
    `<div id="verso${numeroVerso++}" class="versoMusica">${refrao3}</div>`;
  textoMusica.innerHTML += 
    `<div id="verso${numeroVerso++}" class="versoMusica">${refrao4}</div>`;
  textoMusica.innerHTML += 
    `<div id="verso${numeroVerso++}" class="versoMusica">${refrao5}</div>`;
  textoMusica.innerHTML += 
    `<div id="verso${numeroVerso++}" class="versoMusica">${refrao6}</div>`;
  textoMusica.innerHTML += 
    `<div id="verso${numeroVerso++}" class="versoMusica">${refrao7}</div>`;
  textoMusica.innerHTML += 
    `<div id="verso${numeroVerso++}" class="versoMusica">${refrao8}</div>`;
  emitirSom(refrao1, numeroPatinhos);
  emitirSom(refrao2, numeroPatinhos);
  emitirSom(refrao3, numeroPatinhos);
  emitirSom(refrao4, numeroPatinhos);
  emitirSom(refrao5, numeroPatinhos);
  emitirSom(refrao6, numeroPatinhos);
  emitirSom(refrao7, numeroPatinhos);
  emitirSom(refrao8, numeroPatinhos);
}

numeroPatinhos = queryParams.get("numeroPatinhos");

let final1, final2, final3, final4, final5, final6, final7;
final1 = `A mamãe patinha foi procurar`;
final2 = `Além das montanhas`;
final3 = `Na beira do mar`;
final4 = `A mamãe gritou`;
final5 = `Quá, quá, quá, quá`;
if (numeroPatinhos > 1) {
  final6 = `E os ${numeroPatinhos} patinhos`
  final7 = `voltaram de lá`
} else {
  final6 = `E o patinho`
  final7 = `voltou de lá`
}
console.log(final1);
console.log(final2);
console.log(final3);
console.log(final4);
console.log(final5);
console.log(final6);
console.log(final7);
const textoMusica = document.getElementById("textoMusica");
textoMusica.innerHTML += 
  `<div id="verso${numeroVerso++}" class="versoMusica">${final1}</div>`;
textoMusica.innerHTML += 
  `<div id="verso${numeroVerso++}" class="versoMusica">${final2}</div>`;
textoMusica.innerHTML += 
  `<div id="verso${numeroVerso++}" class="versoMusica">${final3}</div>`;
textoMusica.innerHTML += 
  `<div id="verso${numeroVerso++}" class="versoMusica">${final4}</div>`;
textoMusica.innerHTML += 
  `<div id="verso${numeroVerso++}" class="versoMusica">${final5}</div>`;
textoMusica.innerHTML += 
  `<div id="verso${numeroVerso++}" class="versoMusica">${final6}</div>`;
textoMusica.innerHTML += 
  `<div id="verso${numeroVerso++}" class="versoMusica">${final7}</div>`;
emitirSom(final1);
emitirSom(final2);
emitirSom(final3);
emitirSom(final4);
emitirSom(final5, numeroPatinhos);
emitirSom(final6);
emitirSom(final7);

function emitirSom(palavra, numeroPatinhos = 0) {
  // Verifica se a API Web Speech é suportada pelo navegador
  if ("speechSynthesis" in window) {
    // Cria um objeto de síntese de fala
    let speechSynthesis = window.speechSynthesis;

    // Cria uma instância do objeto SpeechSynthesisUtterance
    let utterance = new SpeechSynthesisUtterance();

    // Define o texto a ser falado
    utterance.text = palavra;

    utterance.onend = function() {
      if (numeroVersoCantando % 8 === 0) {
        animarPatinhos(numeroPatinhos, false);
        console.log("if1");
        patinhosAnimacaoIda();
      } else if (numeroVersoCantando === (numeroVerso - 4)) {
        console.log("if3");
        animarMaePata(2, false);
      } else if ((numeroVersoCantando % 8 === 4)) {
        console.log("if2");
        animarMaePata(1, false);
        maePataAnimacaoIdaChamar();
      } else if (numeroPatinhos && (numeroVersoCantando === (numeroVerso - 3))) {
        console.log("if4");
        animarMaePata(1, true);
        maePataAnimacaoVoltaBuscar();
        animarPatinhos(numeroPatinhos, true);
        patinhosAnimacaoVolta();
      } else if ((numeroVersoCantando % 8 === 5)) {
        console.log("if5");
        animarMaePata(2, false);
      } else if (numeroPatinhos && (numeroVersoCantando % 8 === 6 )) {
        console.log("if6");
        animarMaePata(1, true);
        maePataAnimacaoVoltaChamar();
        animarPatinhos(numeroPatinhos, true);
        patinhosAnimacaoVolta();
      } else if (numeroVersoCantando % 8 === 6 && (numeroVersoCantando !== (numeroVerso - 2))) {
        console.log("if7");
        console.log("numeroVersoCantando = ", numeroVersoCantando);
        console.log("numeroVerso = ", numeroVerso);
        animarMaePata(1, false);
        maePataAnimacaoIdaBuscar();
      }
      document.getElementById(`verso${numeroVersoCantando++}`)
        .classList.remove("versoCantando");
      if (numeroVersoCantando !== numeroVerso)
        document.getElementById(`verso${numeroVersoCantando}`)
          .classList.add("versoCantando");
      else
        window.location.href = '../index.html';
    };  

    // Reproduz o som da fala
    speechSynthesis.speak(utterance);
  } else {
    console.log("API de síntese de fala não suportada");
  }
}

function patinhosAnimacaoIda() {
  const patinhos = document.getElementById("patinhos");
  patinhos.classList.remove("patinhosAnimacaoVolta");
  patinhos.classList.add("patinhosAnimacaoIda");
}

function patinhosAnimacaoVolta() {
  const patinhos = document.getElementById("patinhos");
  patinhos.classList.remove("patinhosAnimacaoIda");
  patinhos.classList.add("patinhosAnimacaoVolta");
}

function maePataAnimacaoIdaChamar() {
  const maePata = document.getElementById("maePata");
  maePata.classList.remove("maePataAnimacaoVoltaChamar");
  maePata.classList.add("maePataAnimacaoIdaChamar");
}

function maePataAnimacaoVoltaChamar() {
  const maePata = document.getElementById("maePata");
  maePata.classList.remove("maePataAnimacaoIdaChamar");
  maePata.classList.add("maePataAnimacaoVoltaChamar");
}

function maePataAnimacaoIdaBuscar() {
  const maePata = document.getElementById("maePata");
  maePata.classList.remove("maePataAnimacaoIdaChamar");
  maePata.classList.add("maePataAnimacaoIdaBuscar");
}

function maePataAnimacaoVoltaBuscar() {
  const maePata = document.getElementById("maePata");
  maePata.classList.remove("maePataAnimacaoIdaBuscar");
  maePata.classList.add("maePataAnimacaoVoltaBuscar");
}

function animarPatinhos(numeroPatinhos, isVolta){
  const divPatinhos = document.getElementById("patinhos");
  divPatinhos.innerHTML = "";
  for (let i = 0; i < numeroPatinhos; i++)
    divPatinhos.innerHTML += "<canvas class='canvas' id='canvas"+ i +"'></canvas>";
  let canvas;
  for (let i = 0; i < numeroPatinhos; i++) {
    canvas = document.getElementById("canvas" + i);
    const ctx = canvas.getContext("2d");

    const CANVAS_WIDTH = canvas.width = window.innerHeight * 0.2;
    const CANVAS_HEIGHT = canvas.height = window.innerHeight * 0.2;

    const playerImage = new Image();
    playerImage.src = "../image/pato_filho.png";
    const spriteWidth = 32;
    const spriteHeight = 32;
    let frameX = 0;
    let frameY = gerarNumeroRandomico();
    const maxFrameX = [2, 6, 4, 6];
    let gameFrame = 0;
    const staggerFrames = 6;

    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.imageSmoothingEnabled = false;
      ctx.save(); // Salva o estado atual do contexto
      if (isVolta) {
        ctx.scale(-1, 1); // Inverte na horizontal
        ctx.translate(-CANVAS_WIDTH, 0); // Ajusta a posição após a inversão
      }
        let position = Math.floor(gameFrame / staggerFrames) % (maxFrameX[frameY]);
      frameX = position * spriteWidth;
      ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.restore(); // Restaura o estado anterior do contexto
      gameFrame++;
      requestAnimationFrame(animate);
    }
    animate();
  }
}

function animarMaePata(animacao, isVolta){
  let canvas = document.getElementById("maePata");
  const ctx = canvas.getContext("2d");

  const CANVAS_WIDTH = canvas.width = window.innerHeight * 0.4;
  const CANVAS_HEIGHT = canvas.height = window.innerHeight * 0.4;

  const playerImage = new Image();
  playerImage.src = "../image/pata_mae.png";
  const spriteWidth = 32;
  const spriteHeight = 32;
  let frameX = 0;
  let frameY = animacao;
  const maxFrameX = [2, 6, 4, 6];
  let gameFrame = 0;
  const staggerFrames = 6;

  function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.imageSmoothingEnabled = false;
    ctx.save(); // Salva o estado atual do contexto
    if (isVolta) {
      ctx.scale(-1, 1); // Inverte na horizontal
      ctx.translate(-CANVAS_WIDTH, 0); // Ajusta a posição após a inversão
    }
    let position = Math.floor(gameFrame / staggerFrames) % (maxFrameX[frameY]);
    frameX = position * spriteWidth;
    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.restore(); // Restaura o estado anterior do contexto
    gameFrame++;
    requestAnimationFrame(animate);
  }
  animate();
}

function gerarNumeroRandomico() {
  const random = Math.round(Math.random());
  return random === 0 ? 1 : 3;
}

{
  canvas = document.getElementById("piso");
  const ctx = canvas.getContext("2d");

  const CANVAS_WIDTH = canvas.width = window.innerWidth;
  const CANVAS_HEIGHT = canvas.height = window.innerHeight * 0.15;

  const montanhaImage = new Image();
  montanhaImage.src = "../image/jungle tileset.png";
  const spriteWidth = 131;
  const spriteHeight = 79;

  function animateMontanha() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(montanhaImage, 16, 224, 159, 32, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    requestAnimationFrame(animateMontanha);
  }
  animateMontanha();
}