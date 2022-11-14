import HttpStatusCodes from '@src/declarations/major/HttpStatusCodes';

import addressService from '@src/services/address-service';
import { IReq, IRes } from './shared/types';


// **** Variables **** //

// Paths
const paths = {
  basePath: '/address',
  get: '/all',
  add: '/add',
  update: '/update',
  delete: '/delete/:id',
} as const;


// **** Functions **** //

/**
 * Get all users.
 */
async function getAll(_: IReq, res: IRes) {
  const address = await addressService.getAll();
  return res.status(HttpStatusCodes.OK).send(address);
}


// **** Export default **** //

export default {
  paths,
  getAll,
} as const;
