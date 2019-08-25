export default (selectTag, opts) => {
  const theSelectTag = selectTag;
  const selectContainer = document.createElement('div');
  const selectionDiv = document.createElement('div');
  const fakeSelect = document.createElement('div');
  const optionTags = theSelectTag.getElementsByTagName('option');
  const selectedOption = Array.from(optionTags).filter((optionTag) => optionTag.selected);
  const hasPlaceholder = theSelectTag.hasAttribute('data-placeholder');
  let clearButton;
  let selection;

  selectContainer.classList.add('select-container');
  selectionDiv.classList.add('selection');
  fakeSelect.classList.add('select');

  theSelectTag.parentNode.insertBefore(selectContainer, theSelectTag);
  selectContainer.appendChild(theSelectTag);

  selectContainer.appendChild(fakeSelect);

  if (opts.allowClear) {
    clearButton = document.createElement('i');
    clearButton.classList.add('clear');
    fakeSelect.appendChild(clearButton);
  }

  fakeSelect.appendChild(selectionDiv);

  if (selectedOption[0].hasAttribute('selected')) {
    selection = selectedOption[0].value;
    selectionDiv.setAttribute('value', selection);
  } else {
    theSelectTag.value = null;

    if (hasPlaceholder) {
      selection = theSelectTag.getAttribute('data-placeholder');
    } else {
      selection = opts.placeholder || '...';
    }

    if (opts.allowClear) {
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

  const height = selectionDiv.offsetHeight;

  fakeSelect.style.height = height;
  fakeSelect.style.height = selectionDiv.offsetHeight;
  fakeSelect.style.overflow = 'hidden';
  fakeSelect.style.transition = `height ${opts.animationSpeed}ms ${opts.animationType}`;

  theSelectTag.style.display = 'none';

  selectionDiv.style.boxSizing = 'border-box';
  selectionDiv.style.height = height;

  if (!hasPlaceholder) {
    theSelectTag.setAttribute('data-placeholder', opts.placeholder || '...');
  }
};
