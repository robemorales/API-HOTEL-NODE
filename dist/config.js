"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
//esto en un programa real no se debe tener asi pues esta todo el login a la base de datos
//lo que se puede hacer es mediante dotenv crear variables y luego llamarlas en este archivo para manajerar 
//el acceso a la pase de datos y que nop sea publico en este caso no es de importancia que estos 
//datos se oculten por lo que lo vamos a dejar asi
var config = {
  host: 'localhost',
  database: 'hotel',
  user: 'root',
  password: '',
  port: '3306'
};
exports.config = config;