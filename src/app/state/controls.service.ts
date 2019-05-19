import {ControlsStore} from './controls.store';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ControlsService {
  constructor(private controlsStore: ControlsStore) {
  }

  updateControlUsage(button: string) {
    this.controlsStore.update({
      button,
      timestamp: new Date()
    });
  }
}
