const pegaBody = document.getElementsByTagName('body')[0];

const criaDiv = () => {
  const divDaGalera = document.createElement('div');
  divDaGalera.id = 'meme-image-container';
  pegaBody.appendChild(divDaGalera);
};

const criaParagr = () => {
  const pegaDiv = document.getElementById('meme-image-container');
  const paragrDaGalera = document.createElement('p');
  const pegaParagr = document.getElementById('meme-text');
  const valorInput = document.getElementById('text-input').value;
  if (pegaParagr) {
    pegaParagr.innerHTML = valorInput;
  } else {
    paragrDaGalera.id = 'meme-text';
    paragrDaGalera.innerHTML = valorInput;
    pegaDiv.appendChild(paragrDaGalera);
  }
};

const criaInput = () => {
  const inputDaGalera = document.createElement('input');
  inputDaGalera.id = 'text-input';
  pegaBody.appendChild(inputDaGalera);
  inputDaGalera.addEventListener('keyup', criaParagr);
};

window.onload = () => {
  criaInput();
  criaDiv();
};
