import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable()
export class NationalityService {
  private readonly nationalities = [
    {
      id: 1,
      value: 'Slovakia',
    },
    {
      id: 2,
      value: 'Czech Republic',
    },
    {
      id: 3,
      value: 'Austria',
    },
  ];

  public getAll(exclude: number[]) {
    return of(this.nationalities).pipe(
      map((items) => items.filter((item) => !exclude.includes(item.id)))
    );
  }
}
