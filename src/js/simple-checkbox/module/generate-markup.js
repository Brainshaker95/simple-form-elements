export default (checkboxTag) => {
  const theCheckboxTag = checkboxTag;

  const checkboxContainer = document.createElement('div');
  const checkmark = document.createElement('i');

  checkboxContainer.classList.add('checkbox-container');
  checkmark.classList.add('checkmark');

  theCheckboxTag.parentNode.insertBefore(checkboxContainer, theCheckboxTag);
  checkboxContainer.appendChild(theCheckboxTag);

  checkboxContainer.appendChild(checkmark);

  if (theCheckboxTag.checked) {
    theCheckboxTag.setAttribute('checked', true);
  }

  if (theCheckboxTag.disabled) {
    checkboxContainer.classList.add('disabled');
  }

  theCheckboxTag.style.display = 'none';
};
