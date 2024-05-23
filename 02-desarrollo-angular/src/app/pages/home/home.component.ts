import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Cat, ResumedCat } from 'src/app/models/types';
import { CatApiService } from 'src/app/services/cat-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cats: ResumedCat[] = [];

  catIndex = 1;
  constructor(private catService: CatApiService) {}

  ngOnInit() {
    this.addCat();
  }

  addCat() {
    this.catService.getCat(this.catIndex)
      .pipe(
        map((cat) => this.mapCat(cat))
      )
      .subscribe((cat) => {
      this.cats.push(cat);
    });

    this.catIndex++;
  }

  addFourRandomCats() {
    this.catService.getnRandomCats(4)
      .pipe(
        map((cats) => cats.map((cat) => this.mapCat(cat)))
      )
      .subscribe((cats) => {
      this.cats = [...this.cats, ...cats];
    });
  }

  deleteAllCats() {
    this.cats = [];
  }

  mapCat({
    id,
    firstName,
    lastName,
    email,
    age,
    gender,
    birthDate,
    image,
  }: Cat): ResumedCat {
    return { id, firstName, lastName, email, age, gender, birthDate, image };
  }
}
