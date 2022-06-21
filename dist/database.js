"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _promise = _interopRequireDefault(require("mysql2/promise"));

var _config = require("./config");

var connect = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _promise["default"].createConnection(_config.config);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function connect() {
    return _ref.apply(this, arguments);
  };
}();
/*
// Obtenga el servicio mysql
const conectionDB = () =>{
    var connection = mysql.createConnection({
       
      
    });
    
    // conectarse a mysql
    connection.connect(function(error){
        if(error){
            console.log('que bola');
        }else{
            console.log('EXITO');
        }
    })
    connection.end(function(){
        // La conexión se ha cerrado
    });
    
}
export default conectionDB

// Agregue las credenciales para acceder a su base de datos
 
/*connection.query('Select *  from users', function(error, results, field){
    if(error){
        throw error;
    }else
    results.forEach(results => {
        console.log(results);
        
    });
})*/
// Cerrar la conexión*/


exports.connect = connect;