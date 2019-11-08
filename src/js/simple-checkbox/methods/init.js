import attachHandlers from '../module/attach-handlers';
import generateMarkup from '../module/generate-markup';
import addCssClasses from '../../css-classes';

export default (checkbox, opts, callback) => {
  if (!checkbox) {
    console.error('Error: Missing required parameter 1 \'checkbox\'');
    return;
  }

  const options = addCssClasses(opts);

  generateMarkup(checkbox, options);
  attachHandlers(checkbox);

  checkbox.dispatchEvent(new Event('init'));

  if (callback) {
    callback();
  }
};
