package model;

import java.time.LocalDate;

public class Reservation {
	
	private Integer id;
	private LocalDate reservationDate;
	private LocalDate startDate;
	private LocalDate endDate;
	private Guest guest;
	
	
	public Reservation(LocalDate reservationDate, LocalDate startDate, LocalDate endDate, Guest guest) {
		super();
		this.reservationDate = reservationDate;
		this.startDate = startDate;
		this.endDate = endDate;
		this.guest = guest;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public LocalDate getReservationDate() {
		return reservationDate;
	}


	public void setReservationDate(LocalDate reservationDate) {
		this.reservationDate = reservationDate;
	}


	public LocalDate getStartDate() {
		return startDate;
	}


	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}


	public LocalDate getEndDate() {
		return endDate;
	}


	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}


	public Guest getGuest() {
		return guest;
	}


	public void setGuest(Guest guest) {
		this.guest = guest;
	}


	@Override
	public String toString() {
		return "Reservation [id=" + id + ", reservationDate=" + reservationDate + ", startDate=" + startDate
				+ ", endDate=" + endDate + ", guest=" + guest + "]";
	}
	
	
	
}
