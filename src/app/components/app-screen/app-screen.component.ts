import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './app-screen.component.html',
  styleUrls: ['./app-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppScreenComponent {
  constructor() {
  }
}
