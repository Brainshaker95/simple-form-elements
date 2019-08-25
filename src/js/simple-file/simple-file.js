import init from './methods/init';
import clear from './methods/clear';

export default {
  init: (file, opts) => init(file, opts),
  clear: (file, opts) => clear(file, opts),
};
