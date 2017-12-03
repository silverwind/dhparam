"use strict";

const crypto = require("crypto");
const asn1 = require("asn1.js");

module.exports = function dhparam(bits) {
  return asn1.define("", function() {
    this.seq().obj(this.key("p").int(), this.key("g").int());
  }).encode({
    p: crypto.createDiffieHellman(bits || 2048).getPrime(),
    g: 2
  }, "pem", {label: "DH PARAMETERS"});
};
