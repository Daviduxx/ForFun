package controller;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;

public class main {
	
	static EntityManager em = Persistence.createEntityManagerFactory("reservation_system").createEntityManager();

	public static void main(String[] args) {
		System.out.println("works");
		
		
	}

}
