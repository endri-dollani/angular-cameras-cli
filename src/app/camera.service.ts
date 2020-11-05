import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Camera } from './camera';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  private baseURL = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  getCameras(): Observable<Camera[]>{
    return this.httpClient.get<Camera[]>(this.baseURL);    
  }

  createCamera(camera: Camera): Observable<Object>{
    return this.httpClient.post(this.baseURL,camera);
  }

  getCameraById(id: number): Observable<Camera>{
    return this.httpClient.get<Camera>(`${this.baseURL}/${id}`);
  }

  updateCamera(id: number, camera: Camera): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, camera);
  }
  deleteCamera(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
