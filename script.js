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
  document.body.style.backgroundColor = random_bg_color();
}

let galleryDiv = document.createElement('div');

let preBtn = document.createElement('button');
let nextBtn = document.createElement('button');
let auotPlayBtn = document.createElement('button');
preBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>`;
nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>`;

auotPlayBtn.innerHTML = `  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
<path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
<path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg>`;
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
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  return bgColor;
}
