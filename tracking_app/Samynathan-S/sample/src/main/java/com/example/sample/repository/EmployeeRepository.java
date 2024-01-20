package com.example.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sample.model.Employee;


public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}