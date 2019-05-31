import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {SoundService} from '../../sound.service';

@Component({
  selector: 'app-controls',
  templateUrl: './app-controls.component.html',
  styleUrls: ['./app-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppControlsComponent {

  @ViewChild('controls')
  controls: ElementRef;

  @Output()
  controlUsed = new EventEmitter<string>();

  leftCoords: number[];
  rightCoords: number[];
  topCoords: number[];
  bottomCoords: number[];
  bCoords: number[];
  rCoords: number[];
  startCoords: number[];
  completeCoords: number[];

  private widthAmplifier: number;
  private heightAmplifier: number;

  constructor(private soundService: SoundService) {
  }

  imageLoaded(): void {
    const clientWidth = this.controls.nativeElement.clientWidth;
    const clientHeight = this.controls.nativeElement.clientHeight;
    this.widthAmplifier = clientWidth / 500;
    this.heightAmplifier = clientHeight / 426;
    this.leftCoords = this.mapCoords([31, 141, 71, 194]);
    this.rightCoords = this.mapCoords([120, 195, 162, 140]);
    this.topCoords = this.mapCoords([67, 105, 122, 137]);
    this.bottomCoords = this.mapCoords([68, 195, 122, 231]);
    this.bCoords = this.mapCoords([352, 177, 33]);
    this.rCoords = this.mapCoords([432, 140, 33]);
    this.startCoords = this.mapCoords([190, 266, 135, 291, 133, 309, 144, 320, 203, 298, 211, 282, 202, 269]);
    this.completeCoords = this.mapCoords([222, 299, 232, 289, 280, 266, 291, 269, 297, 284, 288, 301, 242, 323, 227, 317, 222, 312]);
  }

  private mapCoords(coords: number[]) {
    return coords.map((c, i) => {
      if (i % 2 === 0) {
        return c * this.widthAmplifier;
      } else {
        return c * this.heightAmplifier;
      }
    });
  }

  buttonClicked(button: string) {
    this.soundService.button();
    this.controlUsed.emit(button);
  }
}
