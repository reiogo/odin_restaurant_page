import flowers from './flowers.jpg';

const initPage = () => {
  
  const content = document.querySelector('div#content');

  const flowersPhoto = new Image();
  flowersPhoto.src = flowers;
  flowersPhoto.width = "700";

  content.appendChild(flowersPhoto);

  const tagline = document.createElement('h1');

  tagline.textContent = "Welcome to our Garden Restaurant";
  content.appendChild(tagline);

  const welcomePitch = document.createElement('p');

  welcomePitch.textContent = "Enjoy a wonderful view while eating the finest foods";
  content.appendChild(welcomePitch);
    
}
export default initPage;
