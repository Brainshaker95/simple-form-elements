import closeSelects from './close-selects';

export default (event, opts) => {
  const target = event.currentTarget;
  const fakeSelect = target.parentNode;
  const selectTag = fakeSelect.previousElementSibling;
  const optionTags = Array.from(selectTag.options);
  const fakeOptions = fakeSelect.querySelectorAll('.option');
  const selectionDiv = fakeSelect.querySelector('.selection');
  const selectedValue = target.getAttribute('value');
  const isMultiple = selectTag.hasAttribute('multiple');
  const singleSelection = (isMultiple && !event.ctrlKey && !event.shiftKey) || !isMultiple;

  if ((selectedValue === selectionDiv.getAttribute('value') && !isMultiple)
    || target.classList.contains('disabled')) {
    return;
  }

  const selectedOptions = () => optionTags.filter((optionTag) => optionTag.hasAttribute('selected'));
  const selectedOpts = selectedOptions();
  const targetOption = optionTags.filter((optionTag) => optionTag.value === selectedValue)[0];
  let targetValue = targetOption.value;

  const selectOption = () => {
    target.classList.add('selected');
    targetOption.setAttribute('selected', true);
  };

  const deselectOptions = () => {
    fakeOptions.forEach((fakeOption) => fakeOption.classList.remove('selected'));
    optionTags.forEach((optionTag) => optionTag.removeAttribute('selected'));
  };

  if (singleSelection) {
    deselectOptions();
  }

  if (isMultiple && target.classList.contains('selected') && event.ctrlKey) {
    target.classList.remove('selected');
    targetOption.removeAttribute('selected');

    targetValue = selectedOpts[0] ? selectedOpts[0].value : selectTag.getAttribute('data-placeholder');
  } else if (isMultiple && event.shiftKey) {
    const selectedIndices = [];
    const offsets = [];
    let targetIndex;

    fakeOptions.forEach((fakeOption, index) => {
      if (fakeOption.getAttribute('value') === target.getAttribute('value')) {
        targetIndex = index;
      }

      if (fakeOption.classList.contains('selected')) {
        selectedIndices.push(index);
      }
    });

    if (selectedIndices.length) {
      selectedIndices.forEach((selectedIndex) => {
        offsets.push(selectedIndex - targetIndex);
      });

      let offset = offsets.reduce((a, b) => (Math.abs(a) < Math.abs(b) ? a : b));

      deselectOptions();

      if (offset === 0) {
        offset = offsets.reduce((a, b) => (Math.abs(a) > Math.abs(b) ? a : b));
      }

      while (offset !== 0) {
        const indexToSelect = targetIndex + offset;

        fakeOptions[indexToSelect].classList.add('selected');
        optionTags[indexToSelect].setAttribute('selected', true);

        offset += offset > 0 ? -1 : 1;
      }
    }

    selectOption();
  } else {
    selectOption();
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
