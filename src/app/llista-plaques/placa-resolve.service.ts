import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPlaca } from './i-placa';
import { PlacaServiceService } from './placa-service.service';

@Injectable({
  providedIn: 'root'
})
export class PlacaResolveService implements Resolve<IPlaca> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : IPlaca | Observable<IPlaca> | Promise<IPlaca>
  {
    return this.plaquesServiceService.getPlaca(route.params.id).pipe(
      catchError(error => {this.router.navigate(['/plaques']);
      return of(null);
    })
    )
  }

  constructor( private plaquesServiceService: PlacaServiceService, private router: Router ) { }
}
