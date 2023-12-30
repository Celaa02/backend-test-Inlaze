"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _logger = _interopRequireDefault(require("./logger"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
require("./db");
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _post = _interopRequireDefault(require("./routes/post.routes"));
var _user = _interopRequireDefault(require("./routes/user.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use((0, _cors["default"])({
  origin: '*'
}));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].text());
app.use(_express["default"].json());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.get('/', function (req, res) {
  try {
    res.json({
      Author: 'INLAZE',
      project: 'test',
      version: '0.1',
      contributor: ['Darly Marcela Vergara Alvarez']
    });
  } catch (err) {
    _logger["default"].debug(err);
  }
});
app.use('/inlaze/auth', _auth["default"]);
app.use('/inlaze/post', _post["default"]);
app.use('/inlaze/user', _user["default"]);
var _default = exports["default"] = app;