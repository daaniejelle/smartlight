package com.example.restservice.repository;

import com.example.restservice.Model.BulbDatabase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
    public interface BulbRepository extends JpaRepository<BulbDatabase, Long> {

    }


