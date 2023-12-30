"use strict";

var _app = _interopRequireDefault(require("./app"));
var _logger = _interopRequireDefault(require("./logger"));
var _config = require("./config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_app["default"].listen(_config.config.PORT_SERVER, _config.config.HOST_SERVER, function () {
  _logger["default"].info("server is listening on 4000 port");
});