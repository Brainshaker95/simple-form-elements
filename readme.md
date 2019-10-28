# Simple-form-elements

## Common options
```js
const opts = {
// adds namespace to all css classes, if they are not overriden from below
classNamespace: 'simple-',

// class for checkmark icon 
classCheckmark: 'checkmark',

// class for radiomark icon
classRadiomark: 'radiomark',

// class of the container of the checkbox element 
classCheckboxContainer: 'checkbox-container',

// class of the container of the file input element
classFileContainer: 'file-container',

// class of the container of the radio option element
classRadioContainer: 'radio-container',

// class of the container of the select element
classSelectContainer: 'select-container',
}
```

# simple-select
## Methods
```js
  init(select, opts)
  open(select)
  close(select)
  clear(select)
  destroy(select)
```

## Options
```js
const opts = {
  animationSpeed: 250,
  animationType: 'ease',
  allowClear: false,
  closeOnDocumentClick: true,
  closeOnOpenAnother: true,
  placeholder: null,
}
```

'data-placeholder' attribute on select tag also works

## Events
  * init
  * open
  * close
  * clear
  * destroy

# simple-checkbox
## Methods
```js
  init(checkbox, opts)
  check(checkbox)
```

## Events
  * init

# simple-radio
## Methods
```js
  init(radio, opts)
  check(radio)
```

## Events
  * init

# simple-file
## Methods
```js
  init(file, opts)
  select(file)
  clear(file, opts)
```

## Options
```js
const opts = {
  allowClear: false,
  placeholder: 'No file selected',
}
```

'data-placeholder' attribute on file tag also works

## Events
  * init

# Install

## Requirements
  * Any Bash
  * Yarn

## Commands
```shell
  yarn
  yarn run webpack
```

Open index.html in any browser to test it