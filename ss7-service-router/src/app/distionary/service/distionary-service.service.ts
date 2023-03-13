import {Injectable} from '@angular/core';
import {Iword} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DistionaryServiceService {
  words: Iword[] = [{
    id: 1,
    word: 'dog',
    mean: 'chó'
  }, {
    id: 2,
    word: 'cat',
    mean: 'mèo'
  }, {
    id: 3,
    word: 'bird',
    mean: 'chim'
  }
  ];

  constructor() {
  }

  getAll(): Iword[] {
    return this.words;
  }

  findById(id: number) {
    return this.words.filter(item => item.id === id)[0];
  }
}
