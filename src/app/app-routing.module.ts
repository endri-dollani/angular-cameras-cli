import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { CamerasComponent } from './cameras/cameras.component';
import { AddCameraComponent } from './add-camera/add-camera.component';
import { CameraResolutionChartComponent } from './camera-resolution-chart/camera-resolution-chart.component';
import { UpdateCameraComponent } from './update-camera/update-camera.component';
import { CameraDetailsComponent } from './camera-details/camera-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router'; 
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'cameras', component:CamerasComponent},
  { path: 'add', component:AddCameraComponent},
  { path: 'resolution-statistics', component:CameraResolutionChartComponent},
  { path: 'update/:id', component:UpdateCameraComponent},
  { path: 'details/:id', component:CameraDetailsComponent},
  { path: '', redirectTo: 'cameras', pathMatch: 'full'},
  { path: '**', component:PageNotFoundComponent},

];

@NgModule({
  declarations: [
    CamerasComponent,
    AddCameraComponent,
    CameraResolutionChartComponent,
    UpdateCameraComponent,
    CameraDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
