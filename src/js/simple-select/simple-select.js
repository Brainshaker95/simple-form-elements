import init from './methods/init';
import open from './methods/open';
import close from './methods/close';
import clear from './methods/clear';
import destroy from './methods/destroy';

export default {
  init: (select, opts) => init(select, opts),
  open: (select) => open(select),
  close: (select) => close(select),
  clear: (select) => clear(select),
  destroy: (select) => destroy(select),
};
