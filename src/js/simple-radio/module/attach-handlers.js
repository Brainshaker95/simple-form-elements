import check from '../methods/check';
import addCssClasses from '../../css-classes';

export default (radioTag, opts) => {
  const radioContainer = radioTag.parentNode;

  const options = addCssClasses({
    ...opts,
  });

  radioContainer.addEventListener('click', (event) => {
    if (radioContainer.classList.contains('disabled')) {
      return;
    }

    check(event.currentTarget.firstChild, options);
  });
};
