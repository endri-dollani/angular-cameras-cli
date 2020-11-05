import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '../camera';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css'],
})
export class CamerasComponent implements OnInit {
  cameras: Camera[];
  constructor(private cameraService: CameraService, private router: Router) {}

  ngOnInit(): void {
    this.getCameras();
    console.log(this.cameras);
  }

  private getCameras() {
    this.cameraService.getCameras().subscribe((data) => {
      this.cameras = data;
    });
  }

  updateCamera(id: number) {
    this.router.navigate(['update', id]);
  }

  deleteCamera(id: number) {
    this.cameraService.deleteCamera(id).subscribe((data) => {
      console.log(data);
      this.getCameras();
    });
  }

  cameraDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
