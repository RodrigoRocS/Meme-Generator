const pegaBody = document.getElementsByTagName('body')[0];
const idContainer = 'meme-image-container';

const criaDiv = () => {
  const divDaGalera = document.createElement('div');
  divDaGalera.id = idContainer;
  pegaBody.appendChild(divDaGalera);
};

const criaParagr = () => {
  const pegaDiv = document.getElementById(idContainer);
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
  const pegaDiv = document.getElementById(idContainer);
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

const CriaBtn = (color, idDoBtn, bordinha) => {
  const btnDaGalera = document.createElement('button');
  btnDaGalera.style.backgroundColor = color;
  btnDaGalera.id = idDoBtn;
  btnDaGalera.innerText = idDoBtn;
  btnDaGalera.addEventListener('click', () => {
    const pegaImg = document.getElementById('meme-image-container');
    pegaImg.style.border = bordinha;
  });
  pegaBody.appendChild(btnDaGalera);
};

const criaImg2 = () => {
  const pegaDiv = document.getElementById(idContainer);
  const imgDaGalera = document.createElement('img');
  imgDaGalera.id = 'meme-image';
  pegaDiv.appendChild(imgDaGalera);
};

const divImgPre = () => {
  const divDaGalera = document.createElement('div');
  divDaGalera.id = 'div-imagem-pre';
  pegaBody.appendChild(divDaGalera);
  for (let index = 1; index < 5; index += 1) {
    const criaImgPre = document.createElement('img');
    criaImgPre.id = `meme-${[index]}`;
    criaImgPre.style.border = '1px solid black';
    criaImgPre.src = `imgs/meme${[index]}.png`;
    criaImgPre.addEventListener('click', () => {
      const pegaContainer = document.getElementById(idContainer);
      const pegaDiv = document.getElementById('meme-image');
      if (pegaDiv) {
        pegaContainer.removeChild(pegaDiv);
      }
      criaImg2();
      const pegaDivs = document.getElementById('meme-image');
      pegaDivs.src = criaImgPre.src;

    });
    divDaGalera.appendChild(criaImgPre);
  }
};

window.onload = () => {
  criaInput();
  criaDiv();
  ImgUploadInput();
  criaParagr();
  CriaBtn('rgb(255,0,0)', 'fire', '3px dashed red');
  CriaBtn('rgb(0,0,255)', 'water', '5px double rgb(0,0,255)');
  CriaBtn('rgb(0,128,0)', 'earth', '6px groove rgb(0,128,0)');
  divImgPre();
};
