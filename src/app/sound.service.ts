import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  playSound(source: string) {
    const audio = new Audio();
    audio.src = source;
    audio.load();
    audio.play();
  }
}

