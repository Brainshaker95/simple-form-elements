export default (target) => {
  if (!target) {
    console.error('Error: Missing required parameter 1 \'select\'');
    return;
  }

  const selectContainer = target.parentNode.parentNode;
  const selectTag = selectContainer.firstChild;
  const fakeSelect = selectContainer.children[1];
  const placeholder = selectContainer.firstChild.getAttribute('data-placeholder');
  const selectionDiv = fakeSelect.querySelector('.selection');

  target.classList.add('hidden');

  Array.from(selectTag.children).forEach((optionTag) => optionTag.removeAttribute('selected'));
  Array.from(fakeSelect.children).forEach((fakeOption) => fakeOption.classList.remove('selected', 'selection-anker'));

  selectTag.value = null;
  selectTag.dispatchEvent(new Event('change'));
  selectTag.dispatchEvent(new Event('clear'));

  selectionDiv.removeAttribute('value');
  selectionDiv.textContent = placeholder;
};
