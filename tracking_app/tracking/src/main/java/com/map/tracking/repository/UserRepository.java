package com.map.tracking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.map.tracking.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
    
}