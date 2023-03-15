import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  code?: string;
  name?: string;
  dayOfBirth?: string;
  gender?: boolean;
  idCard?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  customerType?: CustomerType;
}
