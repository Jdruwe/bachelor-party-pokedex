import {ActiveState, EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Mission} from './mission.model';
import {Injectable} from '@angular/core';

export interface MissionsState extends EntityState<Mission>, ActiveState {
}

const initialState = {
  active: null
};

@Injectable()
@StoreConfig({name: 'missions'})
export class MissionsStore extends EntityStore<MissionsState, Mission> {
  constructor() {
    super(initialState);
  }
}
