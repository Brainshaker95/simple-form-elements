export default (target, opts) => {
  const fakeSelect = target.parentNode;
  const selectContainer = fakeSelect.parentNode;
  const selectTag = selectContainer.firstChild;
  const optionTags = selectTag.options;
  const selectionDiv = fakeSelect.querySelector('.selection');
  const selection = selectionDiv.getAttribute('value');
  const selectedValue = target.getAttribute('value');
  const selectedOption = optionTags[selectTag.selectedIndex];

  if (target.classList.contains('disabled')) {
    return;
  }

  if (selectedValue === selection) {
    return;
  }

  const targetOption = Array.from(optionTags).filter((optionTag) => optionTag.getAttribute('value') === selectedValue);

  Array.from(fakeSelect.children).forEach((child) => child.classList.remove('selected'));

  if (selectedOption) {
    selectedOption.removeAttribute('selected');
  }

  target.classList.add('selected');
  targetOption[0].setAttribute('selected', true);
  selectionDiv.setAttribute('value', targetOption[0].value);
  selectionDiv.textContent = selectedValue;

  selectTag.dispatchEvent(new Event('change'));

  if (opts.allowClear) {
    fakeSelect.firstChild.classList.remove('hidden');
  }
};
