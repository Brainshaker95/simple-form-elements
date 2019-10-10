import attachHandlers from '../module/attach-handlers';
import generateMarkup from '../module/generate-markup';
import config from '../config';
import addCssClasses from '../../css-classes';

export default (file, opts) => {
  if (!file) {
    console.error('Error: Missing required parameter 1 \'file\'');
    return;
  }

  const options = addCssClasses({
    ...config,
    ...opts,
  });

  generateMarkup(file, options);
  attachHandlers(file, options);

  file.dispatchEvent(new Event('init'));
};
