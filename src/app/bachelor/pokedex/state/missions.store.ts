import {ActiveState, EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Mission} from './mission.model';
import {Injectable} from '@angular/core';
import {PokedexServiceModule} from '../pokedex-service.module';

export interface MissionsState extends EntityState<Mission>, ActiveState {
}

const initialState = {
  active: null
};

@Injectable({
  providedIn: PokedexServiceModule
})
@StoreConfig({name: 'missions'})
export class MissionsStore extends EntityStore<MissionsState, Mission> {
  constructor() {
    super(initialState);
  }
}
