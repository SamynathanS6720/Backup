package com.example.sample.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sample.exception.ResourceNotFoundException;
import com.example.sample.model.DriverCoordinates;
import com.example.sample.model.DriverModel;
import com.example.sample.repository.DriverLocationRepo;
import com.example.sample.repository.DriverRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class DriverController {

    @Autowired
	private DriverRepository driverRepository;

	@Autowired
	private DriverLocationRepo driverLocationRepo;

    // get all driver
	@GetMapping("/driver")
	public List<DriverModel> getAllDrivers(){
		return driverRepository.findAll();
	}	
    
    // create driver rest api
	@PostMapping("/driver")
	public DriverModel createDriver(@RequestBody DriverModel driverModel) {
		return driverRepository.save(driverModel);
	}

	@PutMapping("/driver/{id}")
	public ResponseEntity<DriverCoordinates> updateDriver(@PathVariable Long id, @RequestBody DriverCoordinates driverCoordinate){
		DriverCoordinates Coordinate = driverLocationRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		Coordinate.setDriverModel(driverCoordinate.getDriverModel());
		Coordinate.setLongitude(driverCoordinate.getLongitude());
		Coordinate.setLatitude(driverCoordinate.getLatitude());
		
		DriverCoordinates updatedCoordinates = driverLocationRepo.save(Coordinate);
		return ResponseEntity.ok(updatedCoordinates);
	}

	@DeleteMapping("/driver/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDriver(@PathVariable Long id){
		DriverCoordinates driverModel = driverLocationRepo.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("DriverLocation not exist with id: " + id ));
		driverLocationRepo.delete(driverModel);
		Map<String, Boolean> response = new HashMap<>();
		return ResponseEntity.ok(response);
	}

	@GetMapping("/driverlocations")
	public List<DriverCoordinates> getAllDriverLocation(){
		return driverLocationRepo.findAll();
	}	

	@PostMapping("/driverlocations")
	public DriverCoordinates createDriverLocation(@RequestBody DriverCoordinates driverCoordinates) {
		return driverLocationRepo.save(driverCoordinates);
	}

	@PutMapping("/driverlocations/{id}")
	public ResponseEntity<DriverCoordinates> updateDriverlocation(@PathVariable Long id, @RequestBody DriverCoordinates driverCoordinate){
		DriverCoordinates Coordinate = driverLocationRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		Coordinate.setDriverModel(driverCoordinate.getDriverModel());
		Coordinate.setLongitude(driverCoordinate.getLongitude());
		Coordinate.setLatitude(driverCoordinate.getLatitude());
		
		DriverCoordinates updatedCoordinates = driverLocationRepo.save(Coordinate);
		return ResponseEntity.ok(updatedCoordinates);
	}

	@DeleteMapping("/driverlocations/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDriverlocation(@PathVariable Long id){
		DriverCoordinates driverModel = driverLocationRepo.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("DriverLocation not exist with id: " + id ));
		driverLocationRepo.delete(driverModel);
		Map<String, Boolean> response = new HashMap<>();
		return ResponseEntity.ok(response);
	}
}
