import initPage from './page-load';
import Menu from './menu';
import Contact from './contact';

initPage();

const switchTab = (event) => {

  const contentDiv = document.querySelector("div#content");

  while (contentDiv.hasChildNodes()) {

    contentDiv.removeChild(contentDiv.firstChild);

  }
  
  if (event.target.id == 'home') {
    console.log ('hellllo');
    initPage();

  } else if (event.target.id == 'menu') {

    Menu();

  } else if (event.target.id == 'contact') {

    Contact();

  }
}

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');


homeTab.addEventListener("click", switchTab);
menuTab.addEventListener("click", switchTab);
contactTab.addEventListener("click", switchTab);
