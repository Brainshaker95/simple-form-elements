export default (selectTag, opts) => {
  const theSelectTag = selectTag;
  const selectContainer = document.createElement('div');
  const selectionDiv = document.createElement('div');
  const fakeSelect = document.createElement('div');
  const optionTags = theSelectTag.getElementsByTagName('option');
  const selectedOptions = Array.from(optionTags).filter((optionTag) => optionTag.hasAttribute('selected'));
  const hasPlaceholder = theSelectTag.hasAttribute('data-placeholder');
  const isDisabled = theSelectTag.hasAttribute('disabled');
  const isMultiple = theSelectTag.hasAttribute('multiple');
  let clearButton;
  let selection;

  selectContainer.classList.add(opts.classSelectContainer);
  selectionDiv.classList.add('selection');
  fakeSelect.classList.add('select');

  if (isMultiple) {
    fakeSelect.classList.add('mutiple');
  }

  if (isDisabled) {
    fakeSelect.classList.add('disabled');
  }

  theSelectTag.parentNode.insertBefore(selectContainer, theSelectTag);
  selectContainer.appendChild(theSelectTag);

  selectContainer.appendChild(fakeSelect);

  if (opts.allowClear && !isDisabled) {
    clearButton = document.createElement('i');
    clearButton.classList.add('clear');
    fakeSelect.appendChild(clearButton);
  }

  fakeSelect.appendChild(selectionDiv);

  if (selectedOptions.length) {
    selection = selectedOptions[0].value;
    selectionDiv.setAttribute('value', selection);
  }

  if (isMultiple && selectedOptions.length > 1) {
    selection += '...';
  }

  if (!selection || !opts.showValue) {
    if (hasPlaceholder) {
      selection = theSelectTag.getAttribute('data-placeholder');
    } else {
      selection = opts.placeholder || '...';
    }

    if (opts.allowClear && !isDisabled) {
      clearButton.classList.add('hidden');
    }
  }

  selectionDiv.textContent = selection;

  Array.from(optionTags).forEach((option, index) => {
    const { value } = option;
    const fakeOption = document.createElement('div');

    fakeOption.classList.add('option');
    fakeOption.textContent = value;
    fakeOption.setAttribute('value', value);

    if (option.disabled) {
      fakeOption.classList.add('disabled');
    }

    if (option.hasAttribute('selected')) {
      fakeOption.classList.add('selected');
    }

    if (index === optionTags.length - 1) {
      fakeOption.classList.add('last');
    }

    fakeSelect.append(fakeOption);
  });

  fakeSelect.setAttribute('data-height', fakeSelect.offsetHeight);

  Object.assign(fakeSelect.style, {
    height: selectionDiv.offsetHeight,
    overflow: 'hidden',
    transition: `height ${opts.animationSpeed}ms ${opts.animationType}`,
  });

  theSelectTag.style.display = 'none';
  selectionDiv.style.boxSizing = 'border-box';

  if (!hasPlaceholder) {
    theSelectTag.setAttribute('data-placeholder', opts.placeholder || '...');
  }
};
