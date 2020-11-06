package com.moveengineeringeu.camerasbackend.repository;

import com.moveengineeringeu.camerasbackend.model.Camera;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CameraRepository  extends MongoRepository<Camera, Long> {

}
