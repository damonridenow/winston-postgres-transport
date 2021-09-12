"use strict";
/*
 * @module 'helpers'
 * @fileoverview Winston transport helpers
 * @license MIT
 * @author Andrei Tretyakov <andrei.tretyakov@gmail.com>
 */
var handleCallback = function (callback) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (callback && typeof callback === 'function') {
        callback.apply(void 0, args);
    }
};
module.exports = { handleCallback: handleCallback };
