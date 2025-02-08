package com.communityProject.server.Service;



import com.communityProject.server.Entity.Contact;

import java.util.List;

public interface ContactService {

    // Method to save the contact form data
    Contact saveContact(Contact contact);

    // Optional: Method to retrieve all contacts (if needed)
   /* List<Contact> getAllContacts();*/
}
