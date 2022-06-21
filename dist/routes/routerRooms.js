"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Rooms = require("../controllers/Rooms");

var router = (0, _express.Router)();
/**
* swagger
* /users:
* get:
* summary: holla
*/

router.get('/rooms', _Rooms.getRooms);
router.get('/rooms/count', _Rooms.getRoomCount);
router.get('/rooms/:id', _Rooms.getRoom);
router.post('/rooms', _Rooms.saveRoom);
router["delete"]('/rooms/:id', _Rooms.deleteRoom);
router.put('/rooms/:id', _Rooms.updateRoom);
var _default = router;
exports["default"] = _default;