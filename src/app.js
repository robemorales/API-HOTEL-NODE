import express from 'express';
import roomRoutes from './routes/routerRooms';
import serviceRoutes from './routes/routeServices'
import cors from 'cors';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggeruiexpress from 'swagger-ui-express';
import {options} from './swaggerOptions';

const specs = swaggerJSDoc(options)

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(roomRoutes);
app.use(serviceRoutes)

app.use('/docs',swaggeruiexpress.serve, swaggeruiexpress.setup(specs));
export default app

 