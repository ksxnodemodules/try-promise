
# try-promise

## Requirements

 * Node >= 5.0.0, with `--es-staging` flag

## Usage

### Using class

```javascript
var Try = require('try-promise'); // Try is a subclass of Promise
new Try(act, args).then(onfulfill, onreject);
```

 * `act(...args)` would be executed

 * `onfulfill(result)` would be executed with `result = act(...args)` if no error was thrown

 * `onreject(error)` would be executed if `act(...args)` throw `error`

### Using function

```javascript
var tryCatch = require('try-promise').try;
var promise = tryCatch(act, args).then(onfulfill, onreject);
```
