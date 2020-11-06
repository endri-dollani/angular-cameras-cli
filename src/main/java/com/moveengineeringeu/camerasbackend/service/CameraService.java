package com.moveengineeringeu.camerasbackend.service;

import com.moveengineeringeu.camerasbackend.dao.CameraDao;
import com.moveengineeringeu.camerasbackend.model.Camera;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class CameraService {
    @Autowired
    private CameraDao cameraDao;

    //Get all cameras
    public List<Camera> getCameras(){
        return cameraDao.getCameras();
    }

    //Post a newly added cam to mongodb
    public Camera createCamera(Camera camera) {
        return cameraDao.createCamera(camera);
    }

    //Get cam by specified id
    public ResponseEntity<Camera> getCameraById(long id) {
        return cameraDao.getCameraById(id);
    }

    //Delete
    public ResponseEntity<Map<String ,Boolean>> deleteCameraById(long id) {
        return cameraDao.deleteCameraById(id);
    }

    //Update
    public ResponseEntity<Camera> updateCameraById(long id, Camera cameraUpdatePayload) {
        return cameraDao.updateCameraById(id,cameraUpdatePayload);
    }


}
