package com.example.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sample.model.DriverCoordinates;

public interface DriverLocationRepo extends JpaRepository<DriverCoordinates, Long> {
    
}
