// File showing example usage
import './src/scss/all.scss';

import simpleSelect from './src/js/simple-select/simple-select';
import simpleCheckbox from './src/js/simple-checkbox/simple-checkbox';
import simpleRadio from './src/js/simple-radio/simple-radio';
import simpleFile from './src/js/simple-file/simple-file';

const simpleElementsConfig = {
  // this is the default value, if you don't want to change it, no need to set it
  classNamespace: 'simple-',
};

document.addEventListener('DOMContentLoaded', () => {
  const selects = document.querySelectorAll('.simple-select');
  const checkboxes = document.querySelectorAll('.simple-checkbox');
  const radios = document.querySelectorAll('.simple-radio');
  const files = document.querySelectorAll('.simple-file');

  // simple-checkbox
  checkboxes.forEach((checkbox) => {
    simpleCheckbox.init(checkbox, simpleElementsConfig);

    checkbox.addEventListener('init', () => {
      console.log('initialized');
    });

    checkbox.addEventListener('change', (event) => {
      console.log(event.currentTarget.checked);
    });
  });

  // simple-radio
  radios.forEach((radio) => {
    simpleRadio.init(radio, simpleElementsConfig);

    radio.addEventListener('init', () => {
      console.log('initialized');
    });

    radio.addEventListener('change', (event) => {
      console.log(event.currentTarget.value);
    });
  });

  // simple-file
  files.forEach((file) => {
    simpleFile.init(file, {
      ...simpleElementsConfig,
      allowClear: true,
      placeholder: 'Simple File',
    });

    file.addEventListener('init', () => {
      console.log('initialized');
    });

    file.addEventListener('change', (event) => {
      console.log(event.currentTarget.value);
    });

    file.addEventListener('clear', () => {
      console.log('cleared');
    });
  });

  // simple-select
  selects.forEach((select) => {
    simpleSelect.init(select, {
      ...simpleElementsConfig,
      animationSpeed: 300,
      animationType: 'ease-in-out',
      allowClear: true,
      closeOnDocumentClick: true,
      closeOnOpenAnother: false,
      placeholder: 'Simple Select',
      showValue: true,
    }, () => {
      console.log('I\'m a callback');
    });

    select.addEventListener('init', () => {
      console.log('initialized');
    });

    select.addEventListener('change', (event) => {
      console.log(event.currentTarget.value);
    });

    select.addEventListener('open', () => {
      console.log('opened');
    });

    select.addEventListener('close', () => {
      console.log('closed');
    });

    select.addEventListener('clear', () => {
      console.log('cleared');
    });

    select.addEventListener('destroy', () => {
      console.log('destroyed');
    });
  });
});
