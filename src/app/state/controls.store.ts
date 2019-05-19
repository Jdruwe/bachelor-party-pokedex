import {Store, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';

export interface ControlsState {
  timestamp: Date;
  button: string;
}

export function createInitialState(): ControlsState {
  return {
    button: '',
    timestamp: new Date()
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'controls'})
export class ControlsStore extends Store<ControlsState> {
  constructor() {
    super(createInitialState());
  }
}
