export default (file) => {
  if (!file) {
    console.error('Error: Missing required parameter 1 \'file\'');
    return;
  }

  if (file.disabled) {
    return;
  }

  file.click();
};
