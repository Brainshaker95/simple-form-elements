import open from '../methods/open';
import close from '../methods/close';
import closeSelects from './close-selects';

export default (event, opts) => {
  event.stopPropagation();

  const target = event.currentTarget;
  const isActive = target.classList.contains('active');
  const originalSelect = target.parentNode.previousSibling;

  if (opts.closeOnOpenAnother) {
    closeSelects();
  }

  if (isActive) {
    close(originalSelect);
  } else {
    open(originalSelect);
  }
};
