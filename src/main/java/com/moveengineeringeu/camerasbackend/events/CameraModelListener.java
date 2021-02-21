package com.moveengineeringeu.camerasbackend.events;
import com.moveengineeringeu.camerasbackend.model.Camera;
import com.moveengineeringeu.camerasbackend.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;


@Component
public class CameraModelListener extends AbstractMongoEventListener<Camera> {

    private SequenceGeneratorService sequenceGenerator;

    @Autowired
    public CameraModelListener(SequenceGeneratorService sequenceGenerator) {
        this.sequenceGenerator = sequenceGenerator;
    }

    @Override
    public void onBeforeConvert(BeforeConvertEvent<Camera> event) {
        if (event.getSource().getId() < 1) {
            event.getSource().setId(sequenceGenerator.generateSequence(Camera.SEQUENCE_NAME));
        }
    }


}