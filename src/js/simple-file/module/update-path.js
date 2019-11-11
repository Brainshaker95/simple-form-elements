export default (fileTag, opts) => {
  const pathTag = fileTag.nextSibling;
  const { files } = fileTag;
  const { length } = files;
  let path = '';

  if (length) {
    Array.from(files).forEach((file, index) => {
      const { name } = file;

      path += index === length - 1 ? name : `${name}, `;
    });

    if (opts.animateMultiplePath && length > 1) {
      pathTag.classList.add('animated');
    } else {
      pathTag.classList.remove('animated');
    }

    pathTag.nextSibling.classList.remove('hidden');
  } else {
    pathTag.nextSibling.classList.add('hidden');
    pathTag.classList.remove('animated');
  }

  if (!path) {
    path = fileTag.getAttribute('data-placeholder') || opts.placeholder;
  }

  pathTag.textContent = path;
};
