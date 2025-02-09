package com.communityProject.server.Service;

import com.communityProject.server.Entity.Drugs;
import com.communityProject.server.Repo.DrugsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class DrugsService {

    @Autowired
    private DrugsRepository drugsRepository;

    // Get all products in a category
    public List<Drugs> getProductsByCategory(String category) {
        return drugsRepository.findByCategory(category);
    }

    // Save a new product with an image
    public Drugs saveProduct(String name, String description, double price, String category, String drugSKU, MultipartFile photo) throws IOException {
        Drugs drug = new Drugs();
        drug.setDrugName(name);
        drug.setDrugDescription(description);
        drug.setDrugPrice(price);
        drug.setCategory(category);
        drug.setDrugSKU(drugSKU);
        drug.setPhoto(photo.getBytes());
        return drugsRepository.save(drug);
    }

    public Drugs getDrugById(int id) {
        Optional<Drugs> drug = drugsRepository.findById(id);
        if (drug.isPresent()) {
            System.out.println("Found Drug: " + drug.get());
            return drug.get();
        } else {
            System.out.println("No drug found with ID: " + id);
            return null;
        }
    }



    // Get product image by ID
    public byte[] getProductImage(int id) {
        return drugsRepository.findById(id)
                .map(Drugs::getPhoto)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

}
