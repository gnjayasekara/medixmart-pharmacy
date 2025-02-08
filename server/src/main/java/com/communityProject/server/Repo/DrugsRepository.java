package com.communityProject.server.Repo;

import com.communityProject.server.Entity.Drugs;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DrugsRepository extends JpaRepository<Drugs, Integer> {
    List<Drugs> findByCategory(String category);
}
