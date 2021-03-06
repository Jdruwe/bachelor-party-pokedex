import {QueryEntity} from '@datorama/akita';
import {MissionsStore, MissionsState} from './missions.store';
import {Mission} from './mission.model';
import {Injectable} from '@angular/core';
import {PokedexServiceModule} from '../pokedex-service.module';

@Injectable({
  providedIn: PokedexServiceModule
})
export class MissionsQuery extends QueryEntity<MissionsState, Mission> {
  constructor(protected store: MissionsStore) {
    super(store);
  }
}
