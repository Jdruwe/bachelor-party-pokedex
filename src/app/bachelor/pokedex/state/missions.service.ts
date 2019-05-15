import {MissionsStore} from './missions.store';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Injectable} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {createMission, Mission} from './mission.model';

@Injectable()
export class MissionsService {
  missionsCollection: AngularFirestoreCollection;

  constructor(private missionsStore: MissionsStore, private afs: AngularFirestore) {
    this.missionsCollection = afs.collection('missions');
  }

  getMissions() {
    return this.missionsCollection.snapshotChanges().pipe(
      map(actions => actions.map(this.mapToMission)),
      tap(missions => {
        this.missionsStore.set(missions);
        this.missionsStore.setActive(missions[0].id);
      })
    );
  }

  private mapToMission(action): Mission {
    const data = action.payload.doc.data();
    const id = action.payload.doc.id;
    return createMission({id, ...data});
  }
}
