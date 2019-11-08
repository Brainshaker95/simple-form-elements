# Simple-form-elements

## Table of contents

Getting Started
- [Prerequisites](#prerequisites)
- [Installing](#installing)
- [Commands](#commands)

Usage
- [Implementation](#implementation)
- [Common options](#common-options)

Simple Form Elements
- [Simple Select](#simple-select)
- [Simple Checkbox](#simple-checkbox)
- [Simple Radio](#simple-radio)
- [Simple File](#simple-file)

___

## Prerequisites

  * Yarn

## Installing

```shell
  yarn
```

## Commands

```shell
  # Build project (development)
  yarn run dev

  # Build project (production)
  yarn run build

  # Watch js and css files
  yarn run watch
```
___

## Implementation

See [index.html](index.html) and [app.js](app.js) for implementation examples.

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

___

## simple-select

### Methods

```js
  init(select, opts, callback)
  open(select)
  close(select)
  clear(select)
  destroy(select)
```

### Options

```js
const opts = {
  animationSpeed: 250,
  animationType: 'ease',
  allowClear: false,
  closeOnDocumentClick: true,
  closeOnOpenAnother: true,
  placeholder: null,
  showValue: true,
}
```

> 'data-placeholder' attribute on select tag also works

### Events

  * init
  * change
  * open
  * close
  * clear
  * destroy

___

## simple-checkbox

### Methods

```js
  init(checkbox, opts, callback)
  check(checkbox)
```

## Events

  * init
  * change

___

## simple-radio

### Methods

```js
  init(radio, opts, callback)
  check(radio, opts)
```

### Events

  * init
  * change

___

## simple-file

### Methods

```js
  init(file, opts, callback)
  clear(file, opts)
```

### Options

```js
const opts = {
  allowClear: false,
  placeholder: 'No file selected',
}
```

> 'data-placeholder' attribute on file tag also works

### Events
  * init
  * change
  * clear
