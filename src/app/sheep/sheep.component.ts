import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Sheep } from '../types';

@Component({
  selector: 'app-sheep',
  templateUrl: './sheep.component.html',
  styleUrls: ['./sheep.component.scss'],
})
export class SheepComponent {
  sheep: Sheep[];
  constructor() {
    this.sheep = [{ title: 'I am a sheep', name: 'Wooly', tagline: 'Baaaaa' }];
  }
}
