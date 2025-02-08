package com.communityProject.server.Controller;



import com.communityProject.server.Entity.Prescription;
import com.communityProject.server.Service.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/prescription")
public class PrescriptionController {

    @Autowired
    private PrescriptionService prescriptionService;

    @PostMapping
    public ResponseEntity<String> uploadPrescription(
            @RequestParam("patientName") String patientName,
            @RequestParam("doctorName") String doctorName,
            @RequestParam("prescriptionDetails") String prescriptionDetails,
            @RequestParam("patientAddress") String patientAddress,
            @RequestParam("patientPhone") String patientPhone,
            @RequestParam("file") MultipartFile file) throws IOException {

        // Convert file to byte array
        byte[] fileBytes = file.getBytes();

        // Create Prescription object
        Prescription prescription = new Prescription();
        prescription.setPatientName(patientName);
        prescription.setDoctorName(doctorName);
        prescription.setPrescriptionDetails(prescriptionDetails);
        prescription.setPatientAddress(patientAddress);
        prescription.setPatientPhone(patientPhone);
        prescription.setFile(fileBytes);

        // Save Prescription in the database
        prescriptionService.savePrescription(prescription);

        return ResponseEntity.ok("Prescription uploaded successfully.");
    }
}
