import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { Camera } from '../camera';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-camera-resolution-chart',
  templateUrl: './camera-resolution-chart.component.html',
  styleUrls: ['./camera-resolution-chart.component.css'],
})
export class CameraResolutionChartComponent implements OnInit {
  cameras: Camera[];

  resolutions = [
    'SD (Standard Definition) : 640 x 480',
    'HD (High Definition) : 1280 x 720',
    'Full HD : 1920 x 1080',
    '2K : 2048 x 1152',
    'UHD : 3840 x 2160',
    'DCI 4K : 4096 x 2160',
  ];

  constructor(private cameraService: CameraService) {}

  private getCameras() {
    this.cameraService.getCameras().subscribe((data) => {
      this.cameras = data;
    },error=>console.log(error));
  }

  getNumber(s: string): number {
    let counter = 0;
    for (let i = 0; i < 5; i++) {
      if (this.cameras[i].resolution === s) {
        counter++;
      }
    }
    return counter;
  }
  private  d:number[] = [];

  initRetrival() {
    //this.d = [
      console.log(this.getNumber(this.resolutions[0]));
      
    //];
  }
  ngOnInit(): void {
    this.getCameras();
    this.initRetrival();

    var myChart = new Chart('myChart', {
      type: 'pie',
      data: {
        labels: [this.resolutions[0], this.resolutions[1], this.resolutions[2], this.resolutions[3],
        this.resolutions[4],this.resolutions[5]],
        datasets: [
          {
            label: '# of Votes',
            data: [this.d[0], this.d[1], this.d[2], this.d[3], this.d[4], this.d[5]],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {},
    });
  }
}
