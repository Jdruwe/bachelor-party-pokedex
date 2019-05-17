import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SoundService {

  private levelUpAudio: HTMLAudioElement;
  private battleAudio: HTMLAudioElement;
  private buttonAudio: HTMLAudioElement;

  constructor() {
    this.buttonAudio = new Audio();
    this.buttonAudio.src = 'assets/sound/button.mp3';
    this.buttonAudio.load();

    this.levelUpAudio = new Audio();
    this.levelUpAudio.src = 'assets/sound/level-up.mp3';
    this.levelUpAudio.load();

    this.battleAudio = new Audio();
    this.battleAudio.src = 'assets/sound/battle.mp3';
    this.battleAudio.load();
  }

  levelUp() {
    this.levelUpAudio.play();
  }

  battle() {
    this.battleAudio.play();
  }

  button() {
    this.buttonAudio.play();
  }
}

