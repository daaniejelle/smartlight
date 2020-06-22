package com.example.restservice.Models;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Person {
    final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    int id;
    String firstName;
    String prefix;
    String lastName;
    LocalDate birthDate;
    Address address;
    int isDirtyCounter = 0;


    public Person() {
        address = new Address("", 0, "", "");
    }

    public Person(int id, String firstName, String prefix, String lastName, LocalDate birthDate, Address address) {
        this.id = id;
        this.firstName = firstName;
        this.prefix = prefix;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.address = address;
    }

    public int getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        isDirtyCounter++;
        this.firstName = firstName;
    }

    public String getPrefix() {
        return prefix;
    }

    public void setPrefix(String prefix) {
        isDirtyCounter++;
        this.prefix = prefix;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        isDirtyCounter++;
        this.lastName = lastName;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public String getFullName(){
        return (firstName + " " + prefix + " " + lastName).replace("  ", " ");
    }

    public String getBirthDatePrint() {
        String formattedDateTime = birthDate.format(formatter);
        return formattedDateTime;
    }

    public int getIsDirtyCounter() {
        return isDirtyCounter;
    }
}
