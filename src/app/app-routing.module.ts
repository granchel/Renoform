import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CentralDetailComponent } from './llista-centrals/central-detail/central-detail.component';
import { CentralsNewComponent } from './llista-centrals/centrals-new/centrals-new.component';
import { LlistaCentralComponent } from './llista-centrals/llista-central/llista-central.component';
import { LlistaMoliComponent } from './llista-molins/llista-moli/llista-moli.component';
import { MolinsDetailComponent } from './llista-molins/molins-detail/molins-detail.component';
import { MolinsNewComponent } from './llista-molins/molins-new/molins-new.component';
import { LlistaPlacaComponent } from './llista-plaques/llista-placa/llista-placa.component';
import { PlacaDetailComponent } from './llista-plaques/placa-detail/placa-detail.component';
import { PlacaNewComponent } from './llista-plaques/placa-new/placa-new.component';
import { PlacaResolveService } from './llista-plaques/placa-resolve.service';
import { PlaquesEditComponent } from './llista-plaques/plaques-edit/plaques-edit.component';
import { AuthGuard } from './user/auth.guard';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},

  {path: 'plaques',
  canActivate: [AuthGuard],
  component: LlistaPlacaComponent},

  {path: 'molins',
  canActivate: [AuthGuard],
  component: LlistaMoliComponent},

  {path: 'centrals',
  canActivate: [AuthGuard],
  component: LlistaCentralComponent},

  {path: 'error', component: Error404Component},
  {path: 'inicio', component: LoginComponent},

  {path: 'placa/edit/:id',
  canActivate: [AuthGuard],
  resolve: { placa: PlacaResolveService},
  component: PlaquesEditComponent},

  {path: 'placa/new',component: PlacaNewComponent},
  {path: 'moli/new',component: MolinsNewComponent},
  {path: 'central/new',component: CentralsNewComponent},


  {path: 'placa/:id', component: PlacaDetailComponent},
  {path: 'moli/:id', component: MolinsDetailComponent},
  {path: 'central/:id', component: CentralDetailComponent},
  //{path: 'login', component: LoginComponent},
  //{path: '**', pathMatch: 'full', redirectTo: 'home'}
  {path: '**', pathMatch: 'full', redirectTo: 'error'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }