import {CoachType} from './coach-type';
import {Departure} from './departure';
import {Destination} from './destination';

export interface Coach {
  numberPlate: number;
  phoneNumber: number;
  departureTime: string;
  arrivalTime: string;
  deleted: boolean;
  coachType: CoachType;
  departure: Departure;
  destination: Destination;
}
