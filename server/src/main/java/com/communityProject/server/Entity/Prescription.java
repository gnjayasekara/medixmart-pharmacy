package com.communityProject.server.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "prescription_details")

public class Prescription {

    @Id
    private Long id;

    @Column(name = "patient_name", length = 100, nullable = false)
    private String patientName;

    @Column(name = "doctor_name", length = 100, nullable = false)
    private String doctorName;

    @Column(name = "prescriptionDetails", length = 100, nullable = false)
    private String prescriptionDetails;

    @Column(name = "patientAddress", length = 100, nullable = false)
    private String patientAddress;

    @Column(name = "patientPhone", length = 100, nullable = false)
    private String patientPhone;

    @Lob
    private byte[] file;

    public byte[] getFile() {
        return file;
    }

    public void setFile(byte[] file) {
        this.file = file;
    }

    @Column(name = "createdDate", length = 100, nullable = false)
    private Date createdDate;
    @PrePersist
    public void prePersist() {
        this.createdDate = new Date();
    }
}

