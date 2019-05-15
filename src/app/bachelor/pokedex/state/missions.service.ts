import {MissionsStore} from './missions.store';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Mission} from './mission.model';
import {Injectable} from '@angular/core';

@Injectable()
export class MissionsService {
  missionsCollection: AngularFirestoreCollection;

  constructor(private missionsStore: MissionsStore, private afs: AngularFirestore) {
    this.missionsCollection = afs.collection('missions');
    this.fetch();
  }

  fetch() {
    this.missionsCollection.valueChanges().subscribe((missions: Mission[]) => {
      this.missionsStore.set(missions);
    });
  }
}
