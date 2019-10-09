import attachHandlers from '../module/attach-handlers';
import generateMarkup from '../module/generate-markup';
import addCssClasses from '../../cssClasses';

export default (checkbox, opts) => {
  if (!checkbox) {
    console.error('Error: Missing required parameter 1 \'checkbox\'');
    return;
  }

  const options = addCssClasses(opts);

  generateMarkup(checkbox, options);
  attachHandlers(checkbox);

  checkbox.dispatchEvent(new Event('init'));
};
