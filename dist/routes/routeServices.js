"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _services = require("../controllers/services");

var router = (0, _express.Router)();
/**
* swagger
* /users:
* get:
* summary: holla
*/

router.get('/services', _services.getServices);
router.get('/services/count', _services.getServiceCount);
router.get('/services/:id', _services.getService);
router.post('/services', _services.saveService);
router["delete"]('/services/:id', _services.deleteService);
router.put('/services/:id', _services.updateService);
var _default = router;
exports["default"] = _default;