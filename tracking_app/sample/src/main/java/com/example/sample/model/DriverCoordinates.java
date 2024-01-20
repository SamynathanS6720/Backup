package com.example.sample.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;


@Entity
@Table(name="drivercoordinates")
public class DriverCoordinates implements RepoClass{
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private long coodrdinateid;

   @OneToOne 
   @JoinColumn(name= "driverId") 
   private DriverModel driverId ;

   @Column(name = "longitude")
   private Double longitude;

   @Column(name = "latitude")
   private Double latitude;

    // Constructors, getters, and setters

    public DriverCoordinates() {
        // Default constructor
    }

    public DriverCoordinates(DriverModel driverId, Double longitude, Double latitude) {
        this.driverId = driverId;
        this.longitude = longitude;
        this.latitude = latitude;
    }

    public long getId() {
        return coodrdinateid;
    }

    public void setId(long id) {
        this.coodrdinateid = id;
    }

    public DriverModel getDriverModel() {
        return driverId;
    }

    public void setDriverModel(DriverModel driverId) {
        this.driverId = driverId;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

}