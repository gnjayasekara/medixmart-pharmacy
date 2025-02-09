package com.communityProject.server.Service;



import com.communityProject.server.DTO.PrescriptionDTO;
import com.communityProject.server.Entity.Prescription;

import com.communityProject.server.Repo.PrescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Base64;

@Service
public class PrescriptionServiceImpl implements PrescriptionService {

    @Autowired
    private PrescriptionRepository prescriptionRepository;

    @Override
    public String savePrescription(PrescriptionDTO prescriptionDTO) {
        try {
            Prescription prescription = new Prescription();
            prescription.setPatientName(prescriptionDTO.getPatientName());
            prescription.setDoctorName(prescriptionDTO.getDoctorName());
            prescription.setPrescriptionDetails(prescriptionDTO.getPrescriptionDetails());
            prescription.setPatientAddress(prescriptionDTO.getPatientAddress());
            prescription.setPatientPhone(prescriptionDTO.getPatientPhone());
            prescription.setUploadDate(java.time.LocalDate.now());
            prescription.setCreatedDate(LocalDateTime.now());

            // Decode Base64-encoded file
            if (prescriptionDTO.getFile() != null && !prescriptionDTO.getFile().isEmpty()) {
                prescription.setFile(Base64.getDecoder().decode(prescriptionDTO.getFile()));
                prescription.setFileType(prescriptionDTO.getFileType());
            }

            prescriptionRepository.save(prescription);
            return "Prescription saved successfully!";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error saving prescription: " + e.getMessage();
        }
    }
}

    


