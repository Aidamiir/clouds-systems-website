document.addEventListener('DOMContentLoaded', () => {
    const moreButton = document.querySelector('.projects__button') as HTMLButtonElement;
    const hideButton = document.querySelector('.projects__hide-button') as HTMLButtonElement;
    const cardsContainer = document.querySelector('.projects__cards') as HTMLDivElement;
    const projectsTitle = document.querySelector('.projects__title') as HTMLElement;
    const additionalProjects = [...cardsContainer.children].slice(6);
  
    moreButton.addEventListener('click', () => {
        additionalProjects.forEach(card => {
        (card as HTMLElement).style.display = 'block';
      });
      moreButton.style.display = 'none';
      hideButton.style.display = 'inline-block';
    });
  
    hideButton.addEventListener('click', () => {
        additionalProjects.forEach(card => {
        (card as HTMLElement).style.display = 'none';
      });
      moreButton.style.display = 'inline-block';
      hideButton.style.display = 'none';
      projectsTitle.scrollIntoView({ behavior: 'smooth' });
    });
  
    additionalProjects.forEach(card => {
      (card as HTMLElement).style.display = 'none';
    });
  });