import { Router } from 'express';
import shipsRoutes from './ships/ships.router';

const router = Router();

router.use('/ships', shipsRoutes);

// eslint-disable-next-line import/no-default-export
export default router;
