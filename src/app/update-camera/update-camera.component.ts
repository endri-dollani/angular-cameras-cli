import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera } from '../camera';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-update-camera',
  templateUrl: './update-camera.component.html',
  styleUrls: ['./update-camera.component.css'],
})
export class UpdateCameraComponent implements OnInit {
  id: number;
  camera: Camera = new Camera();

  resolutions = [
    'SD (Standard Definition) : 640 x 480',
    'HD (High Definition) : 1280 x 720',
    'Full HD : 1920 x 1080',
    '2K : 2048 x 1152',
    'UHD : 3840 x 2160',
    'DCI 4K : 4096 x 2160',
  ];

  constructor(
    private cameraService: CameraService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cameraService.getCameraById(this.id).subscribe((data) => {
      this.camera = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.cameraService.updateCamera(this.id,this.camera).subscribe(data=>{
      this.goToCameraList();
    }, error => console.log(error));
  }

  goToCameraList(){
    this.router.navigate(['/cameras']);
  }
}
