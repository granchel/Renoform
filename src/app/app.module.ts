import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LlistesItemsComponent } from './llista-plaques/llistes-items/llistes-items.component';
import { LlistaPlacaComponent } from './llista-plaques/llista-placa/llista-placa.component';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import { MolinsDetailComponent } from './llista-molins/molins-detail/molins-detail.component';
import { LlistesItemsMoliComponent } from './llista-molins/llistes-items-moli/llistes-items-moli.component';
import { LlistaMoliComponent } from './llista-molins/llista-moli/llista-moli.component';
import { LlistaCentralComponent } from './llista-centrals/llista-central/llista-central.component';
import { LlistesItemsCentralComponent } from './llista-centrals/llistes-items-central/llistes-items-central.component';
import { PlacaDetailComponent } from './llista-plaques/placa-detail/placa-detail.component';
import { CentralDetailComponent } from './llista-centrals/central-detail/central-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResaltadoDirective } from './directiva/resaltado.directive';
import { PlaquesEditComponent } from './llista-plaques/plaques-edit/plaques-edit.component';
import { FilterPlaquesPipe } from './llista-plaques/filter-plaques.pipe';
import { FilterMolinsPipe } from './llista-molins/filter-molins.pipe';
import { FilterCentralsPipe } from './llista-centrals/filter-centrals.pipe';
import { PlacaNewComponent } from './llista-plaques/placa-new/placa-new.component';
import { MolinsNewComponent } from './llista-molins/molins-new/molins-new.component';
import { CentralsNewComponent } from './llista-centrals/centrals-new/centrals-new.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LlistesItemsComponent,
    LlistaPlacaComponent,
    Error404Component,
    LoginComponent,
    MolinsDetailComponent,
    LlistesItemsMoliComponent,
    LlistaMoliComponent,
    LlistaCentralComponent,
    LlistesItemsCentralComponent,
    PlacaDetailComponent,
    CentralDetailComponent,
    ResaltadoDirective,
    PlaquesEditComponent,
    FilterPlaquesPipe,
    FilterMolinsPipe,
    FilterCentralsPipe,
    PlacaNewComponent,
    MolinsNewComponent,
    CentralsNewComponent,
     
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
