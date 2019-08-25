export default (radio) => {
  if (!radio) {
    console.error('Error: Missing required parameter 1 \'radio\'');
    return;
  }

  if (radio.hasAttribute('checked')) {
    return;
  }

  const radioContainers = document.querySelectorAll(`.radio-container[name="${radio.getAttribute('name')}"]`);

  Array.from(radioContainers).forEach((container) => {
    container.firstChild.removeAttribute('checked');
  });

  radio.setAttribute('checked', true);

  radio.dispatchEvent(new Event('change'));
};
