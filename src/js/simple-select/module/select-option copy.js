import closeSelects from './close-selects';

export default (event, opts) => {
  const target = event.currentTarget;
  const fakeSelect = target.parentNode;
  const selectTag = fakeSelect.previousElementSibling;
  const optionTags = Array.from(selectTag.options);
  const fakeOptions = Array.from(fakeSelect.querySelectorAll('.option'));
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
  const selectedOpts = selectedOptions();
  const targetOption = optionTags.filter((optionTag) => optionTag.value === selectedValue)[0];
  let targetValue = targetOption.value;

  const deselectOption = () => {
    target.classList.remove('selected');
    targetOption.removeAttribute('selected');

    targetValue = selectedOpts[0] ? selectedOpts[0].value : selectTag.getAttribute('data-placeholder');
  };

  const selectOption = () => {
    target.classList.add('selected');
    targetOption.setAttribute('selected', true);
  };

  const deselectOptions = () => {
    fakeOptions.forEach((fakeOption) => fakeOption.classList.remove('selected'));
    optionTags.forEach((optionTag) => optionTag.removeAttribute('selected'));
  };

  const selectOptions = () => {
    const selectedIndices = [];
    const offsets = [];
    let targetIndex;

    if (!fakeSelect.querySelectorAll('.selection-anker').length) {
      target.classList.add('selection-anker');
    }

    fakeOptions.forEach((fakeOption, index) => {
      if (fakeOption.getAttribute('value') === selectedValue) {
        targetIndex = index;

        if (fakeSelect.querySelectorAll('.selection-anker').length && isSelected) {
          fakeOptions.forEach((fakeOpt) => fakeOpt.classList.remove('selection-anker'));
          target.classList.add('selection-anker');
        }
      }

      if (fakeOption.classList.contains('selected')) {
        selectedIndices.push(index);
      }
    });

    if (selectedIndices.length) {
      deselectOptions();

      selectedIndices.forEach((selectedIndex) => {
        offsets.push(selectedIndex - targetIndex);
      });

      let offset = offsets.reduce((a, b) => (Math.abs(a) < Math.abs(b) ? a : b));

      // if (offsets.filter((o) => o > 0).length) {
      //   offset = Math.max(...offsets);
      // }

      if (offset === 0) {
        offset = offsets.reduce((a, b) => (Math.abs(a) > Math.abs(b) ? a : b));
      }

      if (fakeSelect.querySelectorAll('.selection-anker').length) {
        const selectionAnkerIndex = fakeOptions.findIndex((fakeOption) => fakeOption.classList.contains('selection-anker'));
        console.log(selectionAnkerIndex);

        offset -= selectionAnkerIndex;
      }

      while (offset !== 0) {
        const indexToSelect = targetIndex + offset;

        fakeOptions[indexToSelect].classList.add('selected');
        optionTags[indexToSelect].setAttribute('selected', true);

        offset += offset > 0 ? -1 : 1;
      }
    }

    selectOption();
  };

  if (singleSelection) {
    deselectOptions();
  }

  if (isMultiple && isSelected && event.ctrlKey) {
    deselectOption();
  } else if (isMultiple && event.shiftKey) {
    selectOptions();
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
