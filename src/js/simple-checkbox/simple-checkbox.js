import init from './methods/init';
import check from './methods/check';

export default {
  init: (checkbox, opts, callback) => init(checkbox, opts, callback),
  check: (checkbox) => check(checkbox),
};
