import attachHandlers from '../module/attach-handlers';
import generateMarkup from '../module/generate-markup';

export default (checkbox) => {
  if (!checkbox) {
    console.error('Error: Missing required parameter 1 \'checkbox\'');
    return;
  }

  generateMarkup(checkbox);
  attachHandlers(checkbox);

  checkbox.dispatchEvent(new Event('init'));
};
