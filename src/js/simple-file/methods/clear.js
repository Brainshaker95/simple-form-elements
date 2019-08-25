import updatePath from "../module/update-path";
import config from '../config';

export default (fileTag, opts) => {
  const theFileTag = fileTag;
  const options = {
    ...config,
    ...opts,
  };

  theFileTag.value = null;

  updatePath(fileTag, options);

  fileTag.dispatchEvent(new Event('change'));
};
