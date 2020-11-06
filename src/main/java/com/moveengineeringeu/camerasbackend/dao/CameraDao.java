package com.moveengineeringeu.camerasbackend.dao;

import com.moveengineeringeu.camerasbackend.exception.ResourceNotFoundException;
import com.moveengineeringeu.camerasbackend.model.Camera;
import com.moveengineeringeu.camerasbackend.repository.CameraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class CameraDao {

    @Autowired
    private CameraRepository repository;

    //Get all cameras
    public List<Camera> getCameras(){
        return repository.findAll();
    }

    //Add a newly created camera to MongoDb repo
    public Camera createCamera(Camera camera) {
        return repository.insert(camera);
    }

    //Get camera with specified id
    public ResponseEntity<Camera> getCameraById(long id) {
        Camera camera = repository.
                            findById(id).
                                orElseThrow(()
                                        -> new ResourceNotFoundException
                                            ("Camera with id:"+id+" does not exist!"));
        return ResponseEntity.ok(camera);
    }

    //Delete
    public ResponseEntity<Map<String ,Boolean>> deleteCameraById(long id){
        Camera camera = repository.
                            findById(id).
                                orElseThrow(()
                                    -> new ResourceNotFoundException
                                        ("Camera with id:"+id+" does not exist!"));
        repository.delete(camera);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);

        return  ResponseEntity.ok(response);
    }

    //Update
    public ResponseEntity<Camera> updateCameraById(long id,
                                                   Camera cameraUpdatePayload) {
        Camera camera = repository.
                            findById(id).
                                orElseThrow(()
                                        -> new ResourceNotFoundException
                                            ("Camera with id:"+id+" does not exist!"));


        camera.setName(cameraUpdatePayload.getName());
        camera.setModel(cameraUpdatePayload.getModel());
        camera.setResolution(cameraUpdatePayload.getResolution());
        camera.setIp(cameraUpdatePayload.getIp());

        Camera updatedCamera = repository.save(camera);
        return ResponseEntity.ok(updatedCamera);
    }


}
