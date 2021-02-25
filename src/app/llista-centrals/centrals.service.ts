import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICentral } from './i-central';

@Injectable({
  providedIn: 'root'
})

export class CentralsService {
  
    constructor(private http: HttpClient) { }
  
    centralsURL = 'assets/centrals.json';
  
    getCentrals(): Observable <ICentral[]>{
      return this.http.get<{centrals: ICentral[]}>(this.centralsURL).pipe(
        map(response => response.centrals)
      )
    }
  
    getCentral(id: number){
      return this.http.get<{centrals: ICentral[]}>(this.centralsURL).pipe(
        map(response => response.centrals.filter(p => p.id == id)[0])
    );
  }
} 

