import init from './methods/init';
import check from './methods/check';

export default {
  init: (radio, opts, callback) => init(radio, opts, callback),
  check: (radio, opts) => check(radio, opts),
};
