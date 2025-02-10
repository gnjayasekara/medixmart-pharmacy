package com.communityProject.server.Controller;

import com.communityProject.server.Entity.Drugs;
import com.communityProject.server.Service.DrugsService; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class DrugsController {

    @Autowired
    private DrugsService drugsService;

    // Get all products in a category
    @GetMapping("/category/{categoryName}")
    public ResponseEntity<List<Drugs>> getProductsByCategory(@PathVariable String categoryName) {
        List<Drugs> drugs = drugsService.getProductsByCategory(categoryName);
        return (!drugs.isEmpty()) ? ResponseEntity.ok(drugs) : ResponseEntity.notFound().build();
    }

    // Upload a new product with image
    @PostMapping("/upload")
    public ResponseEntity<String> uploadProduct(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("price") double price,
            @RequestParam("category") String category,
            @RequestParam("drugSKU") String drugSKU,
            @RequestParam("file") MultipartFile file) {
        try {
            drugsService.saveProduct(name, description, price, category, drugSKU, file);
            return ResponseEntity.ok("Product uploaded successfully.");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error uploading product.");
        }
    }

    @GetMapping("/drug/{id}")
    public ResponseEntity<Drugs> getDrugById(@PathVariable int id) {
        Drugs drug = drugsService.getDrugById(id);
        if (drug != null) {
            return ResponseEntity.ok(drug);
        } else {
            return ResponseEntity.status(404).body(null);
        }
    }

    @GetMapping("/all")
    public List<Drugs> getAllDrugs() {
        return drugsService.getAllDrugs();
    }


    // Get product image
    @GetMapping("/image/{id}")
    public ResponseEntity<String> getProductImage(@PathVariable int id) {
        try {
            byte[] image = drugsService.getProductImage(id);
            if (image == null) {
                return ResponseEntity.status(404).body(null);
            }

            // Convert byte array to Base64 string
            String base64Image = Base64.getEncoder().encodeToString(image);

            return ResponseEntity.ok()
                    .contentType(MediaType.TEXT_PLAIN)
                    .body(base64Image);  // Send the Base64 string
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(null);
        }
    }

}
