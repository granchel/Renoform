import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMoli } from './i-moli';

@Injectable({
  providedIn: 'root'
})
export class MolinsService {
  constructor(private http: HttpClient) { }

  molinsURL = 'assets/molins.json';

  getPlaques(): Observable <IMoli[]>{
    return this.http.get<{molins: IMoli[]}>(this.molinsURL).pipe(
      map(response => response.molins)
    )
  }

  getPlaca(id: number){
    return this.http.get<{molins: IMoli[]}>(this.molinsURL).pipe(
      map(response => response.molins.filter(p => p.id == id)[0])
    );
  }
}
