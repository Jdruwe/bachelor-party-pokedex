import {Query} from '@datorama/akita';
import {ControlsStore, ControlsState} from './controls.store';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ControlsQuery extends Query<ControlsState> {
  constructor(protected store: ControlsStore) {
    super(store);
  }
}
