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
  animationSpeed: 250,
  animationType: 'ease',
  allowClear: false,
  closeOnDocumentClick: true,
  closeOnOpenAnother: true,
  placeholder: null,
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
  init(checkbox)
  check(checkbox)
```

## Events
  * init

# simple-radio
## Methods
```js
  init(radio)
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
  allowClear: false,
  placeholder: 'No file selected',
```

'data-placeholder' attribute on file tag also works

## Events
  * init
