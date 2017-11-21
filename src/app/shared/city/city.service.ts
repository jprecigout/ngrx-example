import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { City } from './city.model';
import 'rxjs/add/operator/map';

@Injectable()
export class CityService {

  private resourceUrl = 'https://geo.api.gouv.fr/communes?codePostal=';

  constructor(private http: Http) { }

  find(cp: string): Observable<City[]> {
    return this.http
        .get(`${this.resourceUrl}${cp}`)
        .map((res: Response) => res.json())
        .map(cityOpenList => cityOpenList.map(
            (cityOpen: any) => {
                let city: City = new City();
                city.zip = cityOpen.codesPostaux[0];
                city.city = cityOpen.nom;
                return city;
            }));
  }
}
