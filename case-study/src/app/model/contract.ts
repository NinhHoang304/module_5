import {Facility} from './facility';
import {Customer} from './customer';

export interface Contract {
  id?: number;
  customer?: Customer;
  facility?: Facility;
  startDate?: string;
  endDate?: string;
  deposit?: number;
}
