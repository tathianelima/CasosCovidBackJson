import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Cities } from 'src/app/components/cities/cities.model';
import { CitiesService } from 'src/app/components/cities/cities.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

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


