import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {SoundService} from '../../../../sound.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private soundService: SoundService
  ) {
  }

  async loginUser(event: FormGroup) {
    const {email, password} = event.value;
    try {
      await this.authService.login(email, password);
      this.soundService.playSound('assets/sound/battle.mp3');
      this.router.navigate(['/']);
    } catch (err) {
      this.error = err.message;
    }
  }
}
