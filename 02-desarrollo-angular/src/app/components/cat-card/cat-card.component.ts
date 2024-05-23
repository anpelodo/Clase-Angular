import { Component, Input } from '@angular/core';
import { ResumedCat } from 'src/app/models/types';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent {
  @Input() cat!: ResumedCat;

  get url() {
    return `/cat/${this.cat.id}`
  }
}
