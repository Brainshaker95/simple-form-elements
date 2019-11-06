export default (opts) => {
  const classNamespace = (opts && opts.classNamespace) || 'simple-';

  return {
    classNamespace,
    classCheckmark: `${classNamespace}checkmark`,
    classRadiomark: `${classNamespace}radiomark`,
    classCheckboxContainer: `${classNamespace}checkbox-container`,
    classFileContainer: `${classNamespace}file-container`,
    classRadioContainer: `${classNamespace}radio-container`,
    classSelectContainer: `${classNamespace}select-container`,
    ...opts,
  };
};
