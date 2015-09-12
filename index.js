"use strict";

var crypto = require("crypto");
var asn1 = require("asn1.js");

module.exports = function dhparam(bits) {
  return asn1.define("", function () {
    this.seq().obj(this.key("p").int(), this.key("g").int());
  }).encode({
    p: crypto.createDiffieHellman(bits || 1024).getPrime(),
    g: 2,
  }, "pem", {label: "DH PARAMETERS"});
};
