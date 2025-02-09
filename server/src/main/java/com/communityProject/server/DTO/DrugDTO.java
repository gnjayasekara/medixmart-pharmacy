package com.communityProject.server.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor

public class DrugDTO {
    private int id;
    private String drugName;

    private double drugPrice;

    private int drugSKU;

    private String generic;

    private int packSize;

    private byte[] photo;


}
