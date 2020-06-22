package com.example.restservice.Models;

public class Address {
    String streetname;
    int number;
    String zipCode;
    String city;

    public Address(String streetname, int number, String zipCode, String city) {
        this.streetname = streetname;
        this.number = number;
        this.zipCode = zipCode;
        this.city = city;
    }

    public String getStreetname() {
        return streetname;
    }

    public void setStreetname(String streetname) {
        this.streetname = streetname;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
