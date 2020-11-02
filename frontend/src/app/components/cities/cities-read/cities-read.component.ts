import { Component, OnInit } from '@angular/core';
import { Cities } from '../cities.model';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-cities-read',
  templateUrl: './cities-read.component.html',
  styleUrls: ['./cities-read.component.css']
})
export class CitiesReadComponent implements OnInit {

cities: Cities[]
displayedColumns = ['id', 'city', 'stateCode', 'quantity', 'confirmed', 'recovered', 'deaths', 'suspected']


  constructor( private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.citiesService.read().subscribe(cities => {
      this.cities = cities 
      console.log(cities)
    })
  }

}
