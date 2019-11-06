import closeSelects from './close-selects';

export default (event, opts) => {
  const target = event.currentTarget;
  const fakeSelect = target.parentNode;
  const selectTag = fakeSelect.previousElementSibling;
  const optionTags = Array.from(selectTag.options);
  const selectionDiv = fakeSelect.querySelector('.selection');
  const selectedValue = target.getAttribute('value');
  const isMultiple = selectTag.hasAttribute('multiple');
  const singleSelection = (isMultiple && !event.ctrlKey) || !isMultiple;

  if ((selectedValue === selectionDiv.getAttribute('value') && !isMultiple)
    || target.classList.contains('disabled')) {
    return;
  }

  const selectedOptions = () => optionTags.filter((optionTag) => optionTag.hasAttribute('selected'));

  const targetOption = optionTags.filter((optionTag) => optionTag.value === selectedValue)[0];
  let targetValue = targetOption.value;

  if (singleSelection) {
    Array.from(fakeSelect.children).forEach((option) => option.classList.remove('selected'));
    optionTags.forEach((optionTag) => optionTag.removeAttribute('selected'));
  }

  if (isMultiple && target.classList.contains('selected') && event.ctrlKey) {
    target.classList.remove('selected');
    targetOption.removeAttribute('selected');

    const selectedOpts = selectedOptions();

    targetValue = selectedOpts[0] ? selectedOpts[0].value : selectTag.getAttribute('data-placeholder');
  } else {
    target.classList.add('selected');
    targetOption.setAttribute('selected', true);
  }

  if (isMultiple && selectedOptions().length > 1) {
    targetValue += '...';
  }

  selectionDiv.setAttribute('value', targetValue);

  if (opts.showValue) {
    selectionDiv.textContent = targetValue;
  }

  if (opts.allowClear) {
    fakeSelect.firstChild.classList.remove('hidden');
  }

  if (singleSelection) {
    closeSelects();
  }

  selectTag.dispatchEvent(new Event('change'));
};
