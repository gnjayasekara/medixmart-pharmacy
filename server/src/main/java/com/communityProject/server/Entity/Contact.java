package com.communityProject.server.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "contact_details")

public class Contact {
    @Column(name = "name", length = 100, nullable=false)
    private String name;

    @Column(name = "email", length = 100, nullable=false)
    private String email;

    @Column(name = "phone", length = 100, nullable=false)
    private String phone;

    @Column(name = "message", length = 100, nullable=false)
    private String message;
}
