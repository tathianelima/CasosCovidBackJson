import { Component, OnInit } from '@angular/core';
import { Cities } from 'src/app/components/cities/cities.model';
import { CitiesService } from 'src/app/components/cities/cities.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  cities: Cities[]
  displayedColumns = ['id', 'city', 'stateCode', 'quantity', 'confirmed', 'recovered', 'deaths', 'suspected']
  
  
    constructor( private citiesService: CitiesService) { }
  
    ngOnInit(): void {
      this.citiesService.read().subscribe(cities => {
        this.cities = cities
      })
    }
  
  }