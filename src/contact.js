const contact = () => {

  const content = document.querySelector('div#content');
  

  const contactInfo = document.createElement('p');
  contactInfo.textContent = "Donald Duck";

  
  content.appendChild(contactInfo); 

  
}

export default contact;

