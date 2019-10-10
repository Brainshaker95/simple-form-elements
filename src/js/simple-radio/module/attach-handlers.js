import check from '../methods/check';

export default (radioTag, options) => {
  const radioContainer = radioTag.parentNode;

  radioContainer.addEventListener('click', (event) => {
    if (radioContainer.classList.contains('disabled')) {
      return;
    }

    check(event.currentTarget.firstChild, options);
  });
};
