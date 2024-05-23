import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, mergeMap, tap } from 'rxjs';
import { Cat } from 'src/app/models/types';
import { CatApiService } from 'src/app/services/cat-api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  cat!: Cat;
  id!: number;

  get fullName(){
    return `${this.cat.firstName} ${this.cat.lastName}`
  }

  constructor(private catService: CatApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.catService.getCat(this.id).subscribe((cat) => {
      this.cat = cat;
    });

  }
}
