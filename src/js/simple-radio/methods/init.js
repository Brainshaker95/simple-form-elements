import attachHandlers from '../module/attach-handlers';
import generateMarkup from '../module/generate-markup';

export default (radio) => {
  if (!radio) {
    console.error('Error: Missing required parameter 1 \'radio\'');
    return;
  }

  generateMarkup(radio);
  attachHandlers(radio);

  radio.dispatchEvent(new Event('init'));
};
