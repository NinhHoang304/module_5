import {CustomerType} from './customer-type';

export interface Customer {
  id?: string;
  customerType?: CustomerType;
  name?: string;
  dateOfBirth?: string;
  gender?: boolean;
  idCard?: number;
  phoneNumber?: number;
  email?: string;
  address?: string;
}
