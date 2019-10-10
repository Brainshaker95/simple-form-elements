import init from './methods/init';
import check from './methods/check';

export default {
  init: (checkbox, opts) => init(checkbox, opts),
  check: (checkbox) => check(checkbox),
};
