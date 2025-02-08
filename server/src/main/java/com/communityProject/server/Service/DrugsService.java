package com.communityProject.server.service;

import com.communityProject.server.entity.Drugs;
import com.communityProject.server.repository.DrugsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class DrugService {

    @Autowired
    private DrugsRepository drugsRepository;

    // Get all products in a category
    public List<Drugs> getProductsByCategory(String category) {
        return drugsRepository.findByCategory(category);
    }

    // Save a new product with an image
    public Drugs saveProduct(String name, String description, double price, String category, MultipartFile photo) throws IOException {
        Drugs drug = new Drugs();
        drug.setName(name);
        drug.setDescription(description);
        drug.setPrice(price);
        drug.setCategory(category);
        drug.setPhoto(photo.getBytes());
        return drugsRepository.save(drug);
    }

    // Get product image by ID
    public byte[] getProductImage(int id) {
        Optional<Drugs> drug = drugsRepository.findById(id);
        return drug.map(Drugs::getPhoto).orElse(null);
    }
}
