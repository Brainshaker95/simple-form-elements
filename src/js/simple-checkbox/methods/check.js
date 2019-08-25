export default (checkbox) => {
  if (!checkbox) {
    console.error('Error: Missing required parameter 1 \'checkbox\'');
    return;
  }

  if (checkbox.hasAttribute('checked')) {
    checkbox.removeAttribute('checked');
  } else {
    checkbox.setAttribute('checked', true);
  }

  checkbox.dispatchEvent(new Event('change'));
};
