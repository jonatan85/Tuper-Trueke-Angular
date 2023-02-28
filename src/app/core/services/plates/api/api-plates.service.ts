import { ApiPlates } from './api-plates.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plates} from '../plates.models'

const BASE_URL = 'https://trabajo-final-node-2jb6biw4b-jonatanmorenoramos85-gmailcom.vercel.app';
// ?offset=0&limit=10",
@Injectable({
  providedIn: 'root'
})
export class ApiPlatesService {

  constructor(private http: HttpClient ) { }

  public getApiPlates(): Observable<ApiPlates[]> {    
    return this.http.get<ApiPlates[]>(`${BASE_URL}/plates`);
  }
  public getApiPlatesDetail(id: string): Observable<ApiPlates> {
    return this.http.get<ApiPlates>(`${BASE_URL}/plates/${id}`);
  }

  public deleteApiPlates(id: string): Observable<ApiPlates> {
    return this.http.delete<ApiPlates>(`${BASE_URL}/plates/${id}`);
  }

  public createApiPlates(body: Plates): Observable<ApiPlates> {
    return this.http.post<ApiPlates>(`${BASE_URL}/plates`, body);
  }

  public editApiPlates(id: string, body: Plates): Observable<ApiPlates> {
    return this.http.put<ApiPlates>(`${BASE_URL}/plates/${id}`, body);
  }
}
