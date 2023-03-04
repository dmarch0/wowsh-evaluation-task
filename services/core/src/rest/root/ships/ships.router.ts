import { Router } from 'express';
import * as controller from './ships.controller';
import * as schemeValidator from './ships.scheme';

const shipsRouter = Router();

shipsRouter.get(
  '/',
  schemeValidator.getRoot,
  controller.getRoot,
);

// eslint-disable-next-line import/no-default-export
export default shipsRouter;
