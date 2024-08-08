// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('.contact__form form') as HTMLFormElement;
//     const inputs = form.querySelectorAll('.contact__input') as NodeListOf<HTMLInputElement>;
  
//     inputs.forEach(input => {
//       input.addEventListener('focus', () => {
//         input.classList.add('focused');
//       });
  
//       input.addEventListener('blur', () => {
//         if (!input.value) {
//           input.classList.remove('focused');
//         }
//       });
//     });
  
//     form.addEventListener('submit', (event) => {
//       event.preventDefault();
//       alert('Форма отправлена!');
//       form.reset();
//       inputs.forEach(input => input.classList.remove('focused'));
//     });
// });
