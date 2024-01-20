package com.example.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sample.model.DriverModel;

public interface DriverRepository extends JpaRepository<DriverModel, Long> {
    
}
