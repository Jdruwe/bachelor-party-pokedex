import {Component} from '@angular/core';
import {ControlsService} from '../../state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private controlsService: ControlsService) {
  }

  onControlUsed(button: string) {
    this.controlsService.updateControlUsage(button);
  }
}
