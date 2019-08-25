import animate from '../module/animate';

export default (select) => {
  if (!select) {
    console.error('Error: Missing required parameter 1 \'select\'');
    return;
  }

  const fakeSelect = select.nextSibling;
  const selection = fakeSelect.querySelector('.selection');

  selection.classList.remove('active');
  animate(fakeSelect, selection.clientHeight);

  select.dispatchEvent(new Event('close'));
};
