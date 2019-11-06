import clear from '../methods/clear';
import updatePath from './update-path';

export default (file, opts) => {
  const fileContainer = file.parentNode;

  fileContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('clear')
      || file.disabled) {
      return;
    }

    file.click();
  });

  file.addEventListener('change', () => updatePath(file, opts));

  if (opts.allowClear) {
    fileContainer.lastChild.addEventListener('click', () => clear(file));
  }
};
