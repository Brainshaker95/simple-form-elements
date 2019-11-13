import closeSelects from './close-selects';

export default (event, opts) => {
  const target = event.currentTarget;
  const fakeSelect = target.parentNode;
  const selectTag = fakeSelect.previousElementSibling;
  const optionTags = Array.from(selectTag.options);
  const fakeOptions = Array.from(fakeSelect.querySelectorAll('.option'));
  const selectionAnkers = fakeSelect.querySelectorAll('.selection-anker');
  const selectionDiv = fakeSelect.querySelector('.selection');
  const selectedValue = target.getAttribute('value');
  const isSelected = target.classList.contains('selected');
  const isMultiple = selectTag.hasAttribute('multiple');
  const singleSelection = (isMultiple && !event.ctrlKey && !event.shiftKey) || !isMultiple;

  if ((selectedValue === selectionDiv.getAttribute('value') && !isMultiple)
    || target.classList.contains('disabled')) {
    return;
  }

  const selectedOptions = () => optionTags.filter((optionTag) => optionTag.hasAttribute('selected'));
  const targetOption = optionTags.filter((optionTag) => optionTag.value === selectedValue)[0];
  let targetValue = targetOption.value;

  const addSelectionAnker = () => {
    selectionAnkers.forEach((opt) => opt.classList.remove('selection-anker'));
    target.classList.add('selection-anker');
  };

  const selectOption = (targetOpt, fakeTargetOpt) => {
    targetOpt.setAttribute('selected', true);
    fakeTargetOpt.classList.add('selected');
  };

  const deselectOptions = () => {
    fakeOptions.forEach((fakeOption) => fakeOption.classList.remove('selected'));
    optionTags.forEach((optionTag) => optionTag.removeAttribute('selected'));
  };

  const selectOptions = () => {
    let lowerBound;
    let upperBound;
    let targetIndex;
    let ankerIndex;

    if (!selectionAnkers.length) {
      addSelectionAnker();
    }

    fakeOptions.forEach((fakeOption, index) => {
      if (fakeOption.getAttribute('value') === selectedValue) {
        targetIndex = index;
      }

      if (fakeOption.classList.contains('selection-anker')) {
        ankerIndex = index;
      }
    });

    if (ankerIndex < targetIndex) {
      lowerBound = ankerIndex;
      upperBound = targetIndex;
    } else if (ankerIndex > targetIndex) {
      lowerBound = targetIndex;
      upperBound = ankerIndex;
    } else {
      lowerBound = targetIndex;
      upperBound = targetIndex;
    }

    fakeOptions.forEach((fakeOption, index) => {
      if (index >= lowerBound && index <= upperBound) {
        selectOption(optionTags[index], fakeOptions[index]);
      }
    });
  };

  if (singleSelection) {
    deselectOptions();
  }

  if (isMultiple && isSelected && event.ctrlKey) {
    target.classList.remove('selected');
    targetOption.removeAttribute('selected');

    const selectedOpts = selectedOptions();

    targetValue = selectedOpts[0] ? selectedOpts[0].value : selectTag.getAttribute('data-placeholder');

    addSelectionAnker();
  } else if (isMultiple && event.shiftKey) {
    deselectOptions();
    selectOptions();
  } else {
    selectOption(targetOption, target);
    addSelectionAnker();
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
