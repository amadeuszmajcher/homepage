"use strict";

console.log(`Hello world!`);

const list = document.querySelector('.project__list--js');

fetch("https://api.github.com/users/amadeuszmajcher/repos")
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repo of repos){
      const {description, homepage, html_url, name} = repo;
      list.innerHTML += `
        <li class="project">
        <div class="project__container">
          <img class="project__logo" src="assets/img/icon-github.svg" alt="github">
          <h3 class="project__title">${name}</h3>
          ${
            description ? '<p class="project__description">${description}</p>' : ''
          }
        </div>
        <div class="project__footer">
          ${
            homepage ? '<a class="project__footer--link" href="${homepage}" target="_blank" rel="nofollow noreferrer" title="Demo: ${name}.">Demo</a>' : ''
          }
          <a class="project__footer--link link__code" href="${html_url}" target="_blank" rel="nofollow noreferrer" title="Source code: ${name}">GitHub</a>
        </div>
    </li>`;
    }
  })
  .catch(err => {
    console.log(err);
  })
