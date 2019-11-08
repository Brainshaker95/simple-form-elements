import init from './methods/init';
import clear from './methods/clear';

export default {
  init: (file, opts, callback) => init(file, opts, callback),
  clear: (file, opts) => clear(file, opts),
};
