import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Mission, MissionsQuery, MissionsService} from '../../state';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {SoundService} from '../../../../sound.service';
import {ControlsQuery} from '../../../../state';
import {Controllable} from '../../../../controlable.interface';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit, OnDestroy, Controllable {
  loading$: Observable<boolean>;
  mission$: Observable<Mission>;

  constructor(private missionsService: MissionsService,
              private missionsQuery: MissionsQuery,
              private soundService: SoundService,
              private controlsQuery: ControlsQuery) {
  }

  ngOnInit() {
    this.bindControls();
    this.bindMissionData();
  }

  bindControls(): void {
    this.controlsQuery.select()
      .pipe(untilDestroyed(this))
      .subscribe(state => this.handleControl(state.button));
  }

  private handleControl(button: string) {
    switch (button) {
      case 'left':
        this.prevMission();
        break;
      case 'right':
        this.nextMission();
        break;
      case 'complete':
        this.completeCurrentMission();
        break;
    }
  }

  private bindMissionData() {
    this.loading$ = this.missionsQuery.selectLoading();
    this.mission$ = this.missionsQuery.selectActive();
    this.missionsService.getMissions()
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  private nextMission(): void {
    this.missionsService.nextMission();
  }

  private prevMission(): void {
    this.missionsService.prevMission();
  }

  private completeCurrentMission(): void {
    const mission = this.missionsQuery.getActive();
    if (!mission.completed) {
      this.soundService.levelUp();
    }
    this.missionsService.toggleMission(mission);
  }

  ngOnDestroy(): void {
  }

  onBadgeClicked(mission: Mission) {
    if (!mission.completed) {
      this.soundService.levelUp();
    }
    this.missionsService.toggleMission(mission);
  }
}
