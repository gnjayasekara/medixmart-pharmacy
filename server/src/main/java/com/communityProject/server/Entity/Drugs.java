package com.communityProject.server.Entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "drug_details")

public class Drugs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "drug_id")
    private int id;

    @Column(name = "drug_name", length = 100, nullable = false)
    private String drugName;

    @Column(name = "drug_price", nullable = false)
    private double drugPrice;

    @Column(name = "drug_description", length = 1000, nullable = false)
    private String drugDescription;

    @Column(name = "drug_sku", nullable = false, unique = true)
    private String drugSKU;

    @Column(name = "generic", length = 100, nullable = false)
    private String generic;

    @Column(name = "pack_size", nullable = false)
    private int packSize;

    @Lob
    @JsonIgnore
    @Column(name = "photo", columnDefinition = "LONGBLOB")
    private byte[] photo;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "category_id")
    @JsonBackReference
    private Category category;
}
