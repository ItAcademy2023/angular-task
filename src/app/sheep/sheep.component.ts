import { Component } from '@angular/core';
import { Sheep } from '../types';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-sheep',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './sheep.component.html',
  styleUrls: ['./sheep.component.scss'],
})
export class SheepComponent {
  sheep: Sheep[];
  constructor() {
    this.sheep = [{ title: 'I am a sheep', name: 'Wooly', tagline: 'Baaaaa' }];
  }
}
