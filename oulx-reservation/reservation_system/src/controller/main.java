package controller;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Scanner;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import model.Guest;
import model.Reservation;

public class main {
	
	static EntityManager em = Persistence.createEntityManagerFactory("reservation_system").createEntityManager();
	static Logger log = LoggerFactory.getLogger(main.class);
	static Scanner sc = new Scanner(System.in);
	static DateTimeFormatter dateForm = DateTimeFormatter.ofPattern("dd-MM-YYYY");
	
	public static void main(String[] args) {
		
		System.out.println("works");
		
	}
	
	public Guest createGuest(boolean hasDog, List<Reservation> reservation) {
		System.out.println("Here you can create a new Guest");
		System.out.println("Write the guest name");
		String name = sc.nextLine();
		System.out.println("Write the guest surname");
		String surname = sc.nextLine();
		System.out.println("Write the guest birthday in this format: dd-MM-YYYY");
		String birthday = sc.nextLine();
		LocalDate scBirthday = dateForm.parseLocalDate(birthday);
		Guest g = new Guest(name, surname, birthday, hasDog, reservation);
		return g;
	}

}
