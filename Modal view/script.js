'use strict';

const model = document.querySelector('.modal');
console.log(model);
const overlay = document.querySelector('.overlay');
const butnCloseModel = document.querySelector('.close-modal');
const showModel = document.querySelectorAll('.show-modal');

const openModel = function () {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < showModel.length; i++)
  showModel[i].addEventListener('click', openModel);

butnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeModel();
  }
});
