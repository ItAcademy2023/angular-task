import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheepDetailed } from 'src/app/types';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent {
  sheep: SheepDetailed = {
    title: 'I am a sheep',
    name: 'Wooly',
    tagline: 'Baaaaa',
    description: 'This is a description',
  };
}
