import clear from '../methods/clear';
import closeSelects from './close-selects';
import selectOption from './select-option';
import toggleSelect from './toggle-select';

export default (selectTag, opts) => {
  const selectContainer = selectTag.parentNode;

  selectContainer.getElementsByClassName('selection')[0].addEventListener('click', (event) => toggleSelect(event, opts));

  Array.from(selectContainer.getElementsByClassName('option')).forEach((option) => {
    option.addEventListener('click', (event) => selectOption(event.currentTarget, opts));
  });

  if (opts.allowClear) {
    selectContainer.getElementsByClassName('clear')[0].addEventListener('click', (event) => clear(event.currentTarget));
  }

  if (opts.closeOnDocumentClick) {
    document.addEventListener('click', (event) => closeSelects(event.target));
  }
};
