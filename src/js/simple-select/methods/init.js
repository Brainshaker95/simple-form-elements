import attachHandlers from '../module/attach-handlers';
import generateMarkup from '../module/generate-markup';
import config from '../config';
import addCssClasses from '../../css-classes';

export default (select, opts, callback) => {
  if (!select) {
    console.error('Error: Missing required parameter 1 \'select\'');
    return;
  }

  const options = addCssClasses({
    ...config,
    ...opts,
  });

  generateMarkup(select, options);

  if (!select.hasAttribute('disabled')) {
    attachHandlers(select, options);
  }

  select.dispatchEvent(new Event('init'));

  if (callback) {
    callback();
  }
};
