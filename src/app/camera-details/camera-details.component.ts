import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera } from '../camera';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-camera-details',
  templateUrl: './camera-details.component.html',
  styleUrls: ['./camera-details.component.css'],
})
export class CameraDetailsComponent implements OnInit {
  id: number;
  camera: Camera = new Camera();

  constructor(
    private rout: ActivatedRoute,
    private cameraService: CameraService
  ) {}

  ngOnInit(): void {
    this.id = this.rout.snapshot.params['id'];

    this.camera = new Camera();
    this.cameraService.getCameraById(this.id).subscribe(
      (data) => {
        this.camera = data;
      },
      (error) => console.log(error)
    );
  }
}
