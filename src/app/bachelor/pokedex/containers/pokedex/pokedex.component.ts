import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Mission, MissionsQuery, MissionsService} from '../../state';
import {untilDestroyed} from 'ngx-take-until-destroy';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit, OnDestroy {
  loading$: Observable<boolean>;
  mission$: Observable<Mission>;

  constructor(private missionsService: MissionsService, private missionsQuery: MissionsQuery) {
  }

  ngOnInit() {
    this.loading$ = this.missionsQuery.selectLoading();
    this.mission$ = this.missionsQuery.selectActive();
    this.missionsService.getMissions()
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  nextMission(): void {
    this.missionsService.nextMission();
  }

  prevMission(): void {
    this.missionsService.prevMission();
  }

  ngOnDestroy(): void {
  }
}
