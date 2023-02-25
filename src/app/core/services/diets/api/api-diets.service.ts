import { ApiDiets } from './api.diets.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const DIETS_URL  = 'https://63d403a68d4e68c14eb7bdf8.mockapi.io/';

@Injectable({
  providedIn: 'root'
})
export class ApiDietsService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiDiets(): Observable<ApiDiets[]> {
    return this.http.get<ApiDiets[]>(`${DIETS_URL}/diets`);
  }
}
