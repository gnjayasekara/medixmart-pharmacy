package com.communityProject.server.Entity;

/*import jakarta.persistence.*;
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
}*/

/*
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "patient_name", length = 100, nullable = false)
    private String patientName;

    @Column(name = "doctor_name", length = 100, nullable = false)
    private String doctorName;

    @Column(name = "prescription_details", length = 500, nullable = false)
    private String prescriptionDetails;

    @Column(name = "patient_address", length = 200, nullable = false)
    private String patientAddress;

    @Column(name = "patient_phone", length = 15, nullable = false)
    private String patientPhone;

    @Lob
    @Column(name = "file")
    private byte[] file;


    @Column(name = "created_date", nullable = false)
    private Date createdDate;

    public Prescription(String patientName, String doctorName, String prescriptionDetails, String patientAddress, String patientPhone, String originalFilename) {
    }

    @PrePersist
    public void prePersist() {
        this.createdDate = new Date();
    }
}
*/


/*



import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "prescription_details")
public class Prescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String patientName;
    private String doctorName;
    private String prescriptionDetails;
    private String patientAddress;
    private String patientPhone;
    @Column(name = "created_date", nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createdDate;

    private LocalDate uploadDate;

    @Lob
    private byte[] file; // Storing file as binary data

    private String fileType;

    // Getters and Setters
}

*/
