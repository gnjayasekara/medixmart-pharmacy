package com.communityProject.server.DTO;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Prescription_DTO {

    private Long id;

    private String patientName;

    private String doctorName;

    private String prescriptionDetails;
    private String patientAddress;
    private int patientPhone;
    private byte[] file;;
    private Date createdDate;
}
