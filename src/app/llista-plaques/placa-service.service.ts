
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlaca } from './i-placa';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacaServiceService {

  constructor(private http: HttpClient) { }

  plaquesURL = 'assets/plaques.json';

  getPlaques(): Observable <IPlaca[]>{
    return this.http.get<{plaques: IPlaca[]}>(this.plaquesURL/*+'/plaques/'*/).pipe(
      map(response => response.plaques)
    )
  }

  getPlaca(id: number){
    return this.http.get<{plaques: IPlaca[]}>(this.plaquesURL/*+'/plaques/'*/).pipe(
      map(response => response.plaques.filter(p => p.id == id)[0])
    );
  }

  editPlaca(placa: IPlaca): Observable<IPlaca>{
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(placa);
    return this.http.put<IPlaca>(this.plaquesURL+placa.id,body,{'headers':headers});
  
  }
} 