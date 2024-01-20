package com.example.sample.model;


import jakarta.persistence.*;

@Entity
@Table(name = "Driver")
public class DriverModel {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long driverId;
	
	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "email_address")
	private String emailId;

    @Column(name = "mobile_no")
    private String mobileNo;


    public DriverModel() {
		
	}
	
	public DriverModel(String firstName, String lastName, String emailId) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
	}
	public long getId() {
		return driverId;
	}
	public void setId(long id) {
		this.driverId = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

    public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
}
    
