"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _joi = require("joi");
var postSchema = new _mongoose.Schema({
  user: {
    type: String,
    unique: false
  },
  userto: {
    type: String,
    unique: false
  },
  title: {
    type: String,
    unique: false
  },
  content: {
    type: String,
    unique: false
  },
  like: []
}, {
  timestamps: true
});
var _default = exports["default"] = (0, _mongoose.model)('post', postSchema);