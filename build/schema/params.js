"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateParamsCreatePost = exports.validateParamsAuthSignup = exports.validateParamsAuthSignin = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var validateParamsAuthSignup = exports.validateParamsAuthSignup = _joi["default"].object().keys({
  fullname: _joi["default"].string(),
  age: _joi["default"].number(),
  email: _joi["default"].string(),
  password: _joi["default"].string()
});
var validateParamsAuthSignin = exports.validateParamsAuthSignin = _joi["default"].object().keys({
  email: _joi["default"].string(),
  password: _joi["default"].string()
});
var validateParamsCreatePost = exports.validateParamsCreatePost = _joi["default"].object().keys({
  _id: _joi["default"].allow(""),
  user: _joi["default"].string(),
  userto: _joi["default"].allow(""),
  title: _joi["default"].string(),
  content: _joi["default"].string()
});