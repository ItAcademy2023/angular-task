import { Component } from '@angular/core';
import { SheepDetailed } from 'src/app/types';

@Component({
  selector: 'app-single',
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
