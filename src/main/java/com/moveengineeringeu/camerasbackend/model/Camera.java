package com.moveengineeringeu.camerasbackend.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Camera")

public class Camera {
    @Transient
    public static final String SEQUENCE_NAME = "users_sequence";

    @Id
    private long id;

    private String name;
    private String model;
    private String resolution;
    private String ip;


    public Camera(String ip, String name,String model, String resolution){
        this.ip = ip;
        this.name = name;
        this.model = model;
        this.resolution = resolution;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getResolution() {
        return resolution;
    }

    public void setResolution(String resolution) {
        this.resolution = resolution;
    }


}
