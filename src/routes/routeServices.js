import {Router} from 'express';
import { getService, getServiceCount, getServices, saveService, deleteService, updateService} from '../controllers/Services'
 const router = Router();

 /**
 * swagger
 * /users:
 * get:
 * summary: holla
 */
 router.get('/services', getServices)

 router.get('/services/count', getServiceCount)

 router.get('/services/:id', getService)

 router.post('/services', saveService)

 router.delete('/services/:id', deleteService)

 router.put('/services/:id', updateService)


 export default router