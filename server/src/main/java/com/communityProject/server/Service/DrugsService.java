package com.communityProject.server.Service;

import com.communityProject.server.Entity.Category;
import com.communityProject.server.Entity.Drugs;
import com.communityProject.server.Repo.CategoryRepository;
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

    @Autowired
    private CategoryRepository categoryRepository;

    // Get all products in a category


    // Save a new product with an image
    public Drugs saveProduct(String name, String description, double price, String drugSKU, String categoryName, MultipartFile photo) throws IOException {
        Category category = categoryRepository.findByName(categoryName)
                .orElseGet(() -> categoryRepository.save(new Category(categoryName))); // Create category with name if not found


        Drugs drug = new Drugs();
        drug.setDrugName(name);
        drug.setDrugDescription(description);
        drug.setDrugPrice(price);
        drug.setDrugSKU(drugSKU);
        drug.setPhoto(photo.getBytes());
        drug.setCategory(category);

        return drugsRepository.save(drug);
    }

    public List<Drugs> getProductsByCategory(String categoryName) {
        Category category = categoryRepository.findByName(categoryName)
                .orElseThrow(() -> new RuntimeException("Category not found"));
        return drugsRepository.findByCategory(category);
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

    public List<Drugs> getAllDrugs() {
        return drugsRepository.findAll();
    }




    // Get product image by ID
    public byte[] getProductImage(int id) {
        return drugsRepository.findById(id)
                .map(Drugs::getPhoto)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

}
