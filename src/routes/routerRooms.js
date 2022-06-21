import {Router} from 'express';
import { getRoom, getRoomCount, getRooms, saveRoom, deleteRoom, updateRoom} from '../controllers/Rooms'
 const router = Router();

 /**
 * swagger
 * /users:
 * get:
 * summary: holla
 */
 router.get('/rooms', getRooms)

 router.get('/rooms/count', getRoomCount)

 router.get('/rooms/:id', getRoom)

 router.post('/rooms', saveRoom)

 router.delete('/rooms/:id', deleteRoom)

 router.put('/rooms/:id', updateRoom)


 export default router