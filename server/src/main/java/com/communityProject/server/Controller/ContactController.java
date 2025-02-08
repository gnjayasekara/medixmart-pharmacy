package com.communityProject.server.Controller;

import com.communityProject.server.Entity.Contact;
import com.communityProject.server.Service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController


@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    // POST request to save contact form
    @PostMapping
    public ResponseEntity<Contact> submitContact(@RequestBody Contact contact) {
        Contact savedContact = contactService.saveContact(contact);
        return ResponseEntity.ok(savedContact);
    }

    // Optional: GET request to fetch all contacts (if needed)
   /* @GetMapping
    public ResponseEntity<?> getAllContacts() {
        return ResponseEntity.ok(contactService.getAllContacts());
    }*/
}
