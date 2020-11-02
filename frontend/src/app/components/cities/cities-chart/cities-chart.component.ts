import { Component, OnInit } from '@angular/core';
import { Cities } from '../cities.model';
import { CitiesService } from '../cities.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-cities-chart',
  templateUrl: './cities-chart.component.html',
  styleUrls: ['./cities-chart.component.css']
})
export class CitiesChartComponent implements OnInit {


  cities: Cities[]
  city = []
  quantity = []
  chart = []

  constructor( private citiesService: CitiesService) { }

  ngOnInit(): void {
      this.citiesService.read().subscribe((res: Cities[]) => {
        res.forEach(y => {
          this.city.push(y.city);
          this.quantity.push(y.quantity);
          console.log(this.city)
          console.log(this.quantity)
        });
        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.city,
            datasets: [
              {
                data: this.quantity,
                backgroundColor: '#3cba9f',
                label: "Número de Infectados ",
                barThickness: 100
              }
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }
            ],
              yAxes: [{
                display: true,
                stacked: true
              }],
            }
          }
        });
      });
  }
}