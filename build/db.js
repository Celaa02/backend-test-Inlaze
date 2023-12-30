"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
var _config = require("./config");
var _logger = _interopRequireDefault(require("./logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// connection with database MongoDB
var url = "mongodb://".concat(_config.config.DB_HOST, ":").concat(_config.config.DB_PORT, "/").concat(_config.config.DB_DATABASE);
_mongoose["default"].connect(url).then(function (db) {
  return _logger["default"].info('Db inlaze is Connected');
})["catch"](function (error) {
  return _logger["default"].debug(error);
});