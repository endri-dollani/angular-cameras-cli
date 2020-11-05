import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '../camera';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-add-camera',
  templateUrl: './add-camera.component.html',
  styleUrls: ['./add-camera.component.css'],
})
export class AddCameraComponent implements OnInit {
  camera: Camera = new Camera();

  resolutions = [
    'SD (Standard Definition) : 640 x 480',
    'HD (High Definition) : 1280 x 720',
    'Full HD : 1920 x 1080',
    '2K : 2048 x 1152',
    'UHD : 3840 x 2160',
    'DCI 4K : 4096 x 2160',
  ];
  constructor(private cameraService: CameraService, private router: Router) {}

  ngOnInit(): void {}

  saveCamera() {
    this.cameraService.createCamera(this.camera).subscribe(
      (data) => {
        console.log(data);
        this.gotToCameraList();
      },
      (error) => console.log(error)
    );
  }
   submitted = false;

  gotToCameraList() {
    this.router.navigate(['/cameras']);
  }
  onSubmit() {
    this.saveCamera();
     this.submitted = true;
  }
}
