'use-strict';
const animals = [
  {
    animalName: 'lioness',
    link: `https://i.natgeofe.com/n/42dfedf7-cc27-4ffd-9a1f-4e3da0743209/nationalgeographic_1777610_square.jpg`,
  },
  {
    animalName: 'panda',
    link: `https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_16x9.jpg`,
  },
  {
    animalName: 'elephant',
    link: `https://images.ctfassets.net/9l3tjzgyn9gr/photo-165355/a4fcf6dc9e5cae625db0d9da9d6066a8/165355-single-male-elephant-in-the-masai-mara.jpg?fm=jpg&fl=progressive&q=50&w=1200`,
  },
  {
    animalName: 'chimpanzee',
    link: `https://www.rd.com/wp-content/uploads/2020/11/eastern-chimpanzee-male-fudge-aged-17-years-portrait.jpg`,
  },
  {
    animalName: 'rhinoceros',
    link: `https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/A-dreamstime_xxl_13809428_fwsxfo.png`,
  },
];

let index = 0;

let interval;
function toUpper(arr) {
  let nameToUpper =
    arr[index].animalName.slice(0, 1).toUpperCase() +
    arr[index].animalName.slice(1).toLowerCase();

  return nameToUpper;
}

function render(div) {
  div.innerHTML = `<div><h2  >${toUpper(
    animals
  )}</h2><img  style="width:200px; height:200px" src="${
    animals[index].link
  }" alt="${toUpper(animals)}'s img"></div>
      
      `;
}

let galleryDiv = document.createElement('div');

let preBtn = document.createElement('button');
let nextBtn = document.createElement('button');
let auotPlayBtn = document.createElement('button');
preBtn.innerHTML = 'pre img';
nextBtn.innerHTML = 'next img';
auotPlayBtn.innerHTML = 'Auto Play';
auotPlayBtn.classList.add('mx-3');
galleryDiv.classList.add(
  'my-5',
  'text-center',
  'd-flex',
  'm-auto',
  'justify-content-center',
  'align-items-center',
  'ps-3'
);
document.body.classList.add('m-auto', 'text-center');

document.body.appendChild(galleryDiv);
document.body.appendChild(preBtn);
document.body.appendChild(auotPlayBtn);
render(galleryDiv);
document.body.appendChild(nextBtn);

preBtn.addEventListener('click', moveToPreImg);

nextBtn.addEventListener('click', moveToNextImg);
auotPlayBtn.addEventListener('click', runImges);

function runImges() {
  let time = Number(prompt('Seconsd to run img'));
  if (time === 0) {
    time = 2;
  }
  interval = setInterval(function () {
    index === animals.length - 1 ? (index = 0) : index++;

    render(galleryDiv);
  }, Number(time * 1000));
}

function moveToNextImg() {
  clearInterval(interval);
  index === animals.length - 1 ? (index = 0) : index++;

  render(galleryDiv);
}
function moveToPreImg() {
  clearInterval(interval);
  index === 0 ? (index = animals.length - 1) : index--;

  render(galleryDiv);
}
