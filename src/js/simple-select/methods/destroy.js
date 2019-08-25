export default (select) => {
  const theSelectTag = select;

  if (!theSelectTag) {
    console.error('Error: Missing required parameter 1 \'select\'');
    return;
  }

  const selectContainer = theSelectTag.parentNode;

  selectContainer.parentNode.insertBefore(theSelectTag, selectContainer);
  theSelectTag.style.display = 'inline-block';
  selectContainer.remove();

  select.dispatchEvent(new Event('destroy'));
};
