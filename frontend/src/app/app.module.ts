import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
//import { MatCardModule } from '@angular/material/card';
import { DadosComponent } from './views/dados/dados.component';
import { GraficoComponent } from './views/grafico/grafico.component';
import { CitiesComponent } from './components/cities/cities.component';
import { HttpClientModule } from '@angular/common/http';
import { CitiesReadComponent } from './components/cities/cities-read/cities-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CitiesChartComponent } from './components/cities/cities-chart/cities-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    DadosComponent,
    GraficoComponent,
    CitiesComponent,
    CitiesReadComponent,
    CitiesChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  //  MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
