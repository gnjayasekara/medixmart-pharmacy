package com.communityProject.server.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class PrescriptionDTO {

    private String patientName;
    private String doctorName;
    private String prescriptionDetails;
    private String patientAddress;
    private String patientPhone;
    //  private LocalDateTime createdDate;

    // Base64-encoded file
    private String file;
    private String fileType;
    private LocalDateTime createdDate;
}
