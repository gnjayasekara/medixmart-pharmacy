package com.communityProject.server.Controller;

/*

import com.communityProject.server.DTO.PrescriptionDTO;
import com.communityProject.server.Service.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/prescription")
@CrossOrigin(origins = "http://localhost:3000") // Adjust the origin for your frontend
public class PrescriptionController {

    @Autowired
    private PrescriptionService prescriptionService;

    @PostMapping
    public ResponseEntity<String> savePrescription(
            @RequestParam("patientName") String patientName,
            @RequestParam("doctorName") String doctorName,
            @RequestParam("prescriptionDetails") String prescriptionDetails,
            @RequestParam("patientAddress") String patientAddress,
            @RequestParam("patientPhone") String patientPhone,
            @RequestParam(value = "file", required = false) MultipartFile file) {

        PrescriptionDTO prescriptionDTO = new PrescriptionDTO();
        prescriptionDTO.setPatientName(patientName);
        prescriptionDTO.setDoctorName(doctorName);
        prescriptionDTO.setPrescriptionDetails(prescriptionDetails);
        prescriptionDTO.setPatientAddress(patientAddress);
        prescriptionDTO.setPatientPhone(patientPhone);
        prescriptionDTO.setFile(file);

        String response = prescriptionService.savePrescription(prescriptionDTO);
        return ResponseEntity.ok(response);
    }
}
*/



import com.communityProject.server.Service.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.Base64;

@RestController
@RequestMapping("/api/prescription")
@CrossOrigin(origins = "http://localhost:3000") // Replace with your frontend URL
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
            @RequestParam(value = "file", required = false) MultipartFile file
    ) {
        try {
            PrescriptionDTO prescriptionDTO = new PrescriptionDTO();
            prescriptionDTO.setPatientName(patientName);
            prescriptionDTO.setDoctorName(doctorName);
            prescriptionDTO.setPrescriptionDetails(prescriptionDetails);
            prescriptionDTO.setPatientAddress(patientAddress);
            prescriptionDTO.setPatientPhone(patientPhone);
            prescriptionDTO.setCreatedDate(LocalDateTime.now()); // Set the created date

            if (file != null) {
                prescriptionDTO.setFile(Base64.getEncoder().encodeToString(file.getBytes()));
                prescriptionDTO.setFileType(file.getContentType());
            }

            String response = prescriptionService.savePrescription(prescriptionDTO);
            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Error uploading prescription: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
