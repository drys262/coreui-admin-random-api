import { Router } from 'express';

import addressRoutes from './address-routes';


// **** Init **** //
const apiRouter = Router();

// **** Setup user routes **** //

const addressRouter = Router();
// Get all users
addressRouter.get(addressRoutes.paths.get, addressRoutes.getAll);
// Add userRouter
apiRouter.use(addressRoutes.paths.basePath, addressRouter);

// **** Export default **** //

export default apiRouter;
