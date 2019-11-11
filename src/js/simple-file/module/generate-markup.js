export default (fileTag, opts) => {
  const theFileTag = fileTag;

  const fileContainer = document.createElement('div');
  const path = document.createElement('div');

  fileContainer.classList.add(opts.classFileContainer);
  path.classList.add('path');

  if (theFileTag.hasAttribute('multiple')) {
    fileContainer.classList.add('multiple');
  }

  theFileTag.parentNode.insertBefore(fileContainer, theFileTag);
  fileContainer.appendChild(theFileTag);

  fileContainer.appendChild(path);

  if (opts.allowClear) {
    const clearButton = document.createElement('i');

    clearButton.classList.add('clear', 'hidden');
    fileContainer.appendChild(clearButton);
  }

  if (theFileTag.disabled) {
    fileContainer.classList.add('disabled');
  }

  path.textContent = theFileTag.value || theFileTag.getAttribute('data-placeholder') || opts.placeholder;

  theFileTag.style.display = 'none';
};
