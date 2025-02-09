package com.communityProject.server.Service;


import com.communityProject.server.DTO.PrescriptionDTO;
import com.communityProject.server.Entity.Prescription;

public interface PrescriptionService {
   String savePrescription(PrescriptionDTO prescriptionDTO);
}

