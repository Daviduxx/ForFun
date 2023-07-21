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
}
