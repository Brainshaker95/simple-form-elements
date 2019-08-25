export default (radioTag) => {
  const theRadioTag = radioTag;

  const radioContainer = document.createElement('div');
  const radiomark = document.createElement('i');

  radioContainer.classList.add('radio-container');
  radiomark.classList.add('radiomark');

  theRadioTag.parentNode.insertBefore(radioContainer, theRadioTag);
  radioContainer.appendChild(theRadioTag);

  radioContainer.appendChild(radiomark);

  if (theRadioTag.hasAttribute('name')) {
    radioContainer.setAttribute('name', theRadioTag.getAttribute('name'));
  }

  if (theRadioTag.checked) {
    theRadioTag.setAttribute('checked', true);
  }

  if (theRadioTag.disabled) {
    radioContainer.classList.add('disabled');
  }

  theRadioTag.style.display = 'none';
};
