"use strict";

const assert = require("assert");
const dhparam = require(".");

let dh = dhparam(256);
assert.equal(dh.length, 110);
assert.ok(/^-----BEGIN DH PARAMETERS-----/.test(dh));
assert.ok(/-----END DH PARAMETERS-----$/.test(dh));

dh = dhparam(512);
assert.equal(dh.length, 155);
assert.ok(/^-----BEGIN DH PARAMETERS-----/.test(dh));
assert.ok(/-----END DH PARAMETERS-----$/.test(dh));

dh = dhparam(1024);
assert.equal(dh.length, 244);
assert.ok(/^-----BEGIN DH PARAMETERS-----/.test(dh));
assert.ok(/-----END DH PARAMETERS-----$/.test(dh));
