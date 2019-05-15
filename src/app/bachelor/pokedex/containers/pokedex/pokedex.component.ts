import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Mission, MissionsQuery, MissionsService} from '../../state';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  missions$: Observable<Mission[]>;

  constructor(private missionsService: MissionsService, private missionsQuery: MissionsQuery) {
  }

  ngOnInit() {
    this.missions$ = this.missionsQuery.selectAll();
  }
}
