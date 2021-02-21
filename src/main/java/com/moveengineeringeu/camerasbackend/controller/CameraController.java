package com.moveengineeringeu.camerasbackend.controller;

import com.moveengineeringeu.camerasbackend.model.Camera;
import com.moveengineeringeu.camerasbackend.service.CameraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")

public class CameraController {
    @Autowired
    private CameraService cameraService;

    //Get all cameras
    @GetMapping()
    public List<Camera> getCameras(){
        return cameraService.getCameras();
    }


    //Post a newly added cam to mongodb
    @PostMapping()
    public Camera postCamera(@RequestBody Camera camera){
        return cameraService.createCamera(camera);
    }

    //Get cam by specified id
    @GetMapping("/{id}")
    public ResponseEntity<Camera> getCameraById(@PathVariable("id") long id){
        return cameraService.getCameraById(id);
    }

    //Delete
    @DeleteMapping("/{id}")
    public  ResponseEntity<Map<String ,Boolean>> deleteCameraById(@PathVariable("id") long id){
        return cameraService.deleteCameraById(id);
    }
    //Update
    @PutMapping ("/{id}")
    public ResponseEntity<Camera> updateCameraById(@PathVariable("id") long id,@RequestBody Camera cameraUpdatePayload){
        return cameraService.updateCameraById(id, cameraUpdatePayload);
    }
}
