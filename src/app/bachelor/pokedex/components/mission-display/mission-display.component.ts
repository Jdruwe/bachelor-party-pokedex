import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Mission} from '../../state';

interface Styling {
  [p: string]: string;
}

@Component({
  selector: 'app-mission-display',
  templateUrl: './mission-display.component.html',
  styleUrls: ['./mission-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MissionDisplayComponent {
  @Input()
  mission: Mission;

  @Output()
  clicked = new EventEmitter<Mission>();

  constructor() {
  }

  badgeClicked() {
    this.clicked.emit(this.mission);
  }

  calculateBadgeStyles(): Styling {
    if (this.mission.completed) {
      return {
        background: `url("assets/img/badges/${this.mission.badge}.png"),
        radial-gradient(
            rgba(255,255,0,.8),
            black
        ),
        repeating-linear-gradient(
            transparent 0,
            rgba(0,0,0,.2) 3px,
            transparent 6px
        )`,
        'background-size': 'contain'
      };
    } else {
      return {
        background: `url("assets/img/badges/${this.mission.badge}.png")`
      };
    }
  }
}
