# dhparam [![NPM version](https://img.shields.io/npm/v/dhparam.svg?style=flat)](https://www.npmjs.org/package/dhparam) [![Dependency Status](http://img.shields.io/david/silverwind/dhparam.svg?style=flat)](https://david-dm.org/silverwind/dhparam)
> Generate PEM-encoded Diffie-Hellman parameters directly from within node

## Install
```bash
$ npm i --save dhparam
```
### Use
```js
var dhparam = require("dhparam");
console.log(dhparam());
// -----BEGIN DH PARAMETERS-----
// MIIBBwKCAQDRTTrIcnoH8L/YbVA21qpr66V+JXKGL14XiXqmtNkXdQc/QSKAfG3R
// jZm+lBX36muujGbiE5n6d524nFY5wRB0O69Ec29ChPQkWXg/Aa9Tw0iguBODMWH7
// autfO3/O7ipyQSaXeFYM3zhpWduyjfl3NP7gApRR6XFhpZkbVoiB6N1QQs2RrIoS
// HsivM0SzROpM6iteyGsFO9ANZdGTcMKuVxD8NrDm99zhPOKLAqlCDPA50SxRn8mQ
// nunzbXFsR6+AX2Er/DaTWLY6iLB1GxAPG9rymBI1hVrgHxLfcv7qkdzqv3iAKk9k
// GjkvdaGa2AJzzetUm4zKueLo+MwOOGkbAgEC
// -----END DH PARAMETERS-----
```
## API
### dhparam(bits)
- `bits` *number*: Key size for the prime. default: 2048

*Note that generating 2048 bits and above will take considerable time*

© 2015 [silverwind](https://github.com/silverwind), distributed under BSD licence
