const pegaBody = document.getElementsByTagName('body')[0];
const idContainer = 'meme-image-container';

const criaDiv = () => {
  const divDaGalera = document.createElement('div');
  divDaGalera.id = `${idContainer}`;
  pegaBody.appendChild(divDaGalera);
};

const criaParagr = () => {
  const pegaDiv = document.getElementById(`${idContainer}`);
  const paragrDaGalera = document.createElement('p');
  const pegaParagr = document.getElementById('meme-text');
  const valorInput = document.getElementById('text-input').value;
  paragrDaGalera.id = 'meme-text';
  pegaDiv.appendChild(paragrDaGalera);
  if (pegaParagr) {
    pegaParagr.innerHTML = valorInput;
  } else {
    paragrDaGalera.innerHTML = valorInput;
  }
};

const criaInput = () => {
  const inputDaGalera = document.createElement('input');
  inputDaGalera.id = 'text-input';
  inputDaGalera.type = 'text';
  inputDaGalera.maxLength = '60';
  pegaBody.appendChild(inputDaGalera);
  inputDaGalera.addEventListener('keyup', criaParagr);
};
// mostra preview da imagem
const criaImg = () => {
  const readFile = new FileReader();
  const pegaDiv = document.getElementById(`${idContainer}`);
  const imgPrev = document.getElementById('meme-insert');
  const imgDaGalera = document.createElement('img');
  imgDaGalera.id = 'meme-image';
  pegaDiv.appendChild(imgDaGalera);
  readFile.onloadend = () => {
    imgDaGalera.setAttribute('src', readFile.result);
  };
  readFile.readAsDataURL(imgPrev.files[0]);
};

const ImgUploadInput = () => {
  const criaInputImg = document.createElement('input');
  criaInputImg.type = 'file';
  criaInputImg.id = 'meme-insert';
  pegaBody.appendChild(criaInputImg);
  criaInputImg.addEventListener('change', criaImg);
};

window.onload = () => {
  criaInput();
  criaDiv();
  ImgUploadInput();
  criaParagr();
};
