import { IAddress } from '@src/models/Address';
import axios from 'axios';
import { GET_ADDRESS_URL } from './constants';


// **** Functions **** //

/**
 * Get all users.
 */
async function getAll(): Promise<IAddress[]> {
  try {
    const address = (await axios.get(`${GET_ADDRESS_URL}?size=30`)).data as IAddress[]
    return address;
  } catch (error){
    console.error('Error getting address', error);
    throw new Error(error)
  }
}


// **** Export default **** //

export default {
  getAll,
} as const;
