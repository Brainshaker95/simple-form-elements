import attachHandlers from '../module/attach-handlers';
import generateMarkup from '../module/generate-markup';
import config from '../config';
import addCssClasses from '../../cssClasses';

export default (select, opts) => {
  if (!select) {
    console.error('Error: Missing required parameter 1 \'select\'');
    return;
  }

  const options = addCssClasses({
    ...config,
    ...opts,
  });

  generateMarkup(select, options);
  attachHandlers(select, options);

  select.dispatchEvent(new Event('init'));
};
