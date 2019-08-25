import check from '../methods/check';

export default (checkboxTag) => {
  const checkboxContainer = checkboxTag.parentNode;

  checkboxContainer.addEventListener('click', (event) => {
    if (checkboxContainer.classList.contains('disabled')) {
      return;
    }

    check(event.currentTarget.firstChild);
  });
};
