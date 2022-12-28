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

const criaImg = () => {
  const readFile = new FileReader();
  const pegaDiv = document.getElementById('meme-image-container');
  const imgPrev = document.getElementById('meme-insert');
  const imgDaGalera = document.createElement('img');
  imgDaGalera.id = 'meme-image';
  imgDaGalera.style.width = '300px';
  imgDaGalera.style.height = '300px';
  imgDaGalera.style.position = 'absolute';
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
};
