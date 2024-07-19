const menu = () => {
  const content = document.querySelector('div#content');
  
  const menuOne = document.createElement('div');

  const menuOneHeader = document.createElement('h1');
  menuOneHeader.textContent = "Fries";

  const menuOneContent = document.createElement('p');
  menuOneContent.textContent = "Fresh Homemade Fries";
  
  
  menuOne.appendChild(menuOneHeader);
  menuOne.appendChild(menuOneContent);
  content.appendChild(menuOne); 

  
}

export default menu;

