import {Component, Input, OnInit} from '@angular/core';
import {Mission} from '../../state';

@Component({
  selector: 'app-mission-display',
  templateUrl: './mission-display.component.html',
  styleUrls: ['./mission-display.component.css']
})
export class MissionDisplayComponent implements OnInit {
  @Input()
  mission: Mission;

  constructor() {
  }

  ngOnInit() {
  }

}
