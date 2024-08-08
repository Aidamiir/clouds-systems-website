document.addEventListener('DOMContentLoaded', () => {
  const moreButton = document.querySelector('.skills__button') as HTMLButtonElement;
  const hideButton = document.querySelector('.skills__hide-button') as HTMLButtonElement;
  const cardsContainer = document.querySelector('.skills__cards') as HTMLDivElement;
  const skillsTitle = document.querySelector('.skills__title') as HTMLElement;
  const additionalSkills = [...cardsContainer.children].slice(6);

  moreButton.addEventListener('click', () => {
    additionalSkills.forEach(card => {
      (card as HTMLElement).style.display = 'block';
    });
    moreButton.style.display = 'none';
    hideButton.style.display = 'inline-block';
  });

  hideButton.addEventListener('click', () => {
    additionalSkills.forEach(card => {
      (card as HTMLElement).style.display = 'none';
    });
    moreButton.style.display = 'inline-block';
    hideButton.style.display = 'none';
    skillsTitle.scrollIntoView({ behavior: 'smooth' });
  });

  additionalSkills.forEach(card => {
    (card as HTMLElement).style.display = 'none';
  });
});