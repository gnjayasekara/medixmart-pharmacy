package com.communityProject.server.DTO;

import jakarta.persistence.Column;

import java.sql.Blob;

public class Drug_DTO {
    private int id;
    private String drugName;

    private double drugPrice;

    private int drugSKU;

    private String generic;

    private int packSize;

    private Blob photo;

}
