# prevent

[![CircleCI](https://circleci.com/gh/segmentio/prevent-default.svg?style=shield&circle-token=b19da5ce2775fdd5e4ad6846645c051c9aea9afa)](https://circleci.com/gh/segmentio/prevent-default)
[![Codecov](https://img.shields.io/codecov/c/github/segmentio/prevent-default/master.svg?maxAge=2592000)](https://codecov.io/gh/segmentio/prevent-default)

Cross-browser preventDefault

## Installation

```sh
$ npm install @segment/prevent-default
```

## Example

```js
anchor.onclick = require('prevent');
anchor.onclick = function(e){
  if (something) return require('prevent')(e);
};
```

## API

### prevent(e)

Prevent the given `e`, if the argument is omitted, the method will fallback to `window.event`.
