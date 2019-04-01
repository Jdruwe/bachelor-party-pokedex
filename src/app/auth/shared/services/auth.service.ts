import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {first} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  get authState(): Observable<User> {
    return this.afAuth.authState.pipe(first());
  }
}
