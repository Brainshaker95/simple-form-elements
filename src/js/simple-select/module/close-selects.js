import animate from './animate';

export default (target) => {
  if (target && target.classList.contains('disabled')) {
    return;
  }

  Array.from(document.querySelectorAll('.selection')).forEach((selectionDiv) => {
    const fakeSelect = selectionDiv.parentNode;

    selectionDiv.classList.remove('active');
    animate(fakeSelect, selectionDiv.offsetHeight);
  });
};
