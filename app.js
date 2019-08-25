// File showing example usage

import simpleSelect from './src/js/simple-select/simple-select';
import simpleCheckbox from './src/js/simple-checkbox/simple-checkbox';
import simpleRadio from './src/js/simple-radio/simple-radio';
import simpleFile from './src/js/simple-file/simple-file';

document.addEventListener('DOMContentLoaded', () => {
  const selects = document.querySelectorAll('.simple-select');
  const checkboxes = document.querySelectorAll('.simple-checkbox');
  const radios = document.querySelectorAll('.simple-radio');
  const files = document.querySelectorAll('.simple-file');

  checkboxes.forEach((checkbox) => {
    simpleCheckbox.init(checkbox);

    checkbox.addEventListener('change', (event) => {
      console.log(event.currentTarget.checked);
    });
  });

  radios.forEach((radio) => {
    simpleRadio.init(radio);

    radio.addEventListener('change', (event) => {
      console.log(event.currentTarget.value);
    });
  });

  files.forEach((file) => {
    simpleFile.init(file, {
      allowClear: true,
      placeholder: 'YEAH',
    });

    file.addEventListener('change', (event) => {
      console.log(event.currentTarget.value);
    });
  });

  selects.forEach((select) => {
    simpleSelect.init(select, {
      animationSpeed: 300,
      animationType: 'ease-in-out',
      allowClear: true,
      closeOnDocumentClick: true,
      closeOnOpenAnother: false,
      placeholder: 'YEAH',
    });

    select.addEventListener('change', (event) => {
      console.log(event.currentTarget.value);
    });

    select.addEventListener('init', () => {
      console.log('initialized');
    });

    select.addEventListener('open', () => {
      console.log('opened');
    });

    select.addEventListener('close', () => {
      console.log('closed');
    });

    select.addEventListener('destroy', () => {
      console.log('destroyed');
    });

    select.addEventListener('clear', () => {
      console.log('cleared');
    });
  });
});
