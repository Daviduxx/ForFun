package model;

import java.time.LocalDate;
import java.util.List;

public class Guest {
	
	private Integer id;
	private String name;
	private String surname;
	private LocalDate birthday;
	private boolean hasDog;
	private List<Reservation> reservations;
	
	
	//CONSTRUCTOR
	public Guest(String name, String surname, LocalDate birthday, boolean hasDog, List<Reservation> reservations) {
		super();
		this.name = name;
		this.surname = surname;
		this.birthday = birthday;
		this.hasDog = hasDog;
		this.reservations = reservations;
	}
	
	
	//GETTERS & SETTERS
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public LocalDate getBirthday() {
		return birthday;
	}
	public void setBirthday(LocalDate birthday) {
		this.birthday = birthday;
	}
	public boolean isHasDog() {
		return hasDog;
	}
	public void setHasDog(boolean hasDog) {
		this.hasDog = hasDog;
	}
	public List<Reservation> getReservations() {
		return reservations;
	}
	public void setReservations(List<Reservation> reservations) {
		this.reservations = reservations;
	}


	@Override
	public String toString() {
		return "Guest [id=" + id + ", name=" + name + ", surname=" + surname + ", birthday=" + birthday + ", hasDog="
				+ hasDog + ", reservations=" + reservations + "]";
	}
	
	
	
}
