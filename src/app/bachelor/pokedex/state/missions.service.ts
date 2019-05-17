import {MissionsStore} from './missions.store';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Injectable} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {createMission, Mission} from './mission.model';
import {MissionsQuery} from './missions.query';

@Injectable()
export class MissionsService {
  missionsCollection: AngularFirestoreCollection;

  constructor(private missionsStore: MissionsStore,
              private missionsQuery: MissionsQuery,
              private afs: AngularFirestore) {
    this.missionsCollection = afs.collection('missions');
  }

  getMissions() {
    return this.missionsCollection.snapshotChanges().pipe(
      map(actions => actions.map(this.mapToMission)),
      tap(missions => {
        this.missionsStore.set(missions);
        this.setFirstMissionActive(missions[0]);
      })
    );
  }

  private setFirstMissionActive(mission: Mission) {
    if (!this.missionsQuery.hasActive()) {
      this.missionsStore.setActive(mission.id);
    }
  }

  nextMission(): void {
    this.missionsStore.setActive({next: true});
  }

  prevMission(): void {
    this.missionsStore.setActive({prev: true});
  }

  private mapToMission(action): Mission {
    const data = action.payload.doc.data();
    const id = action.payload.doc.id;
    return createMission({id, ...data});
  }

  toggleMission(mission: Mission) {
    this.missionsCollection.doc(mission.id as string).update({
      completed: !mission.completed
    });
  }
}
