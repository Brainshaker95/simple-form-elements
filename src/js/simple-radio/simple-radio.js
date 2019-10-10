import init from './methods/init';
import check from './methods/check';

export default {
  init: (radio, opts) => init(radio, opts),
  check: (radio) => check(radio),
};
