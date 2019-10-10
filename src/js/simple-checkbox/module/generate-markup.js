export default (checkboxTag, opts) => {
  const theCheckboxTag = checkboxTag;

  const checkboxContainer = document.createElement('div');
  const checkmark = document.createElement('i');

  checkboxContainer.classList.add(opts.classCheckboxContainer);
  checkmark.classList.add(opts.classCheckmark);

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
