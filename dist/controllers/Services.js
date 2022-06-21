"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateService = exports.saveService = exports.getServices = exports.getServiceCount = exports.getService = exports.deleteService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var getServices = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var connections, _yield$connections$qu, _yield$connections$qu2, rows;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.connect)();

          case 2:
            connections = _context.sent;
            _context.next = 5;
            return connections.query('SELECT * from servicios');

          case 5:
            _yield$connections$qu = _context.sent;
            _yield$connections$qu2 = (0, _slicedToArray2["default"])(_yield$connections$qu, 1);
            rows = _yield$connections$qu2[0];
            //console.log(rows)
            res.json(rows);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getServices(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getServices = getServices;

var getService = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var connections, _yield$connections$qu3, _yield$connections$qu4, rows;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.connect)();

          case 2:
            connections = _context2.sent;
            _context2.next = 5;
            return connections.query('SELECT * from servicios where id = ?', [req.params.id]);

          case 5:
            _yield$connections$qu3 = _context2.sent;
            _yield$connections$qu4 = (0, _slicedToArray2["default"])(_yield$connections$qu3, 1);
            rows = _yield$connections$qu4[0];
            //console.log(rows)
            res.json(rows);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getService(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getService = getService;

var getServiceCount = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var connections, _yield$connections$qu5, _yield$connections$qu6, rows;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _database.connect)();

          case 2:
            connections = _context3.sent;
            _context3.next = 5;
            return connections.query('SELECT count(*) from servicios');

          case 5:
            _yield$connections$qu5 = _context3.sent;
            _yield$connections$qu6 = (0, _slicedToArray2["default"])(_yield$connections$qu5, 1);
            rows = _yield$connections$qu6[0];
            res.json(rows[0]["count(*)"]);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getServiceCount(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getServiceCount = getServiceCount;

var saveService = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var connections, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _database.connect)();

          case 2:
            connections = _context4.sent;
            _context4.next = 5;
            return connections.query("INSERT INTO servicios(title, description) VALUES(?,?)", [req.body.title, req.body.description]);

          case 5:
            result = _context4.sent;

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function saveService(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.saveService = saveService;

var deleteService = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var connections, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _database.connect)();

          case 2:
            connections = _context5.sent;
            _context5.next = 5;
            return connections.query('DELETE from servicios where id = ?', [req.params.id]);

          case 5:
            result = _context5.sent;
            res.sendStatus(204);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteService(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteService = deleteService;

var updateService = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var connections, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _database.connect)();

          case 2:
            connections = _context6.sent;
            _context6.next = 5;
            return connections.query('UPDATE servicios SET ? where id = ?', [req.body, req.params.id]);

          case 5:
            result = _context6.sent;
            //console.log(result);
            res.sendStatus(204);

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateService(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateService = updateService;