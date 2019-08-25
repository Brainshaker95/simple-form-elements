export default (file, opts) => {
  const path = file.nextSibling;
  const { value } = file;

  path.textContent = value || file.getAttribute('data-placeholder') || opts.placeholder;

  if (value) {
    path.nextSibling.classList.remove('hidden');
  } else {
    path.nextSibling.classList.add('hidden');
  }
};
