import animate from '../module/animate';

export default (select) => {
  if (!select) {
    console.error('Error: Missing required parameter 1 \'select\'');
    return;
  }

  const fakeSelect = select.nextSibling;
  const selectionDiv = fakeSelect.querySelector('.selection');

  selectionDiv.classList.add('active');
  animate(fakeSelect, fakeSelect.getAttribute('data-height'));

  select.dispatchEvent(new Event('open'));
};
