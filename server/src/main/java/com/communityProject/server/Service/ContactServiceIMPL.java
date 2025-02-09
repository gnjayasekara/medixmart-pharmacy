package com.communityProject.server.Service;

import com.communityProject.server.Entity.Contact;
import com.communityProject.server.Repo.ContactRepository;
import org.hibernate.annotations.SecondaryRow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactServiceIMPL implements ContactService{
    @Autowired
    private ContactRepository contactRepository;

    // Implement the method to save contact data
    @Override
    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }

    // Implement the method to retrieve all contacts (optional)
   /* @OverrideZ
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }*/
}
