package com.example.restservice.Models;

public class LightBulb {
    //nummer van de lamp zodat ik ze uit elkaar kan houden
    int id;
    private String location;
    private String color;
    private String wattage;
    boolean isBulbState;
    int isDirtyCounter = 0;

    public LightBulb(int id, String location, String color, String wattage, boolean isBulbState) {

        this.id = id;
        this.location = location;
        this.color = color;
        this.wattage = wattage;
        this.isBulbState = isBulbState;
        this.isDirtyCounter = isDirtyCounter;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String Location) {
        this.location = location;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getWattage() {
        return wattage;
    }

    public void setWattage(String wattage) {
        this.wattage = wattage;
    }

    public boolean isBulbState() {
        return isBulbState;
    }

    public void setBulbState(boolean isBulbState) {
        this.isBulbState = isBulbState;
    }
    // Showing if the bulb is turned on

    public void turnOn() {
        System.out.println("De lamp is aangezet");
    }

    public int turnOff(int id, String location) {
        System.out.println("De lamp is uitgezet");
        return id;
    }


    public void checkIfTurnedOn() {
        System.out.println("Status lamp in de " + location + " " + "" + "(ID = " + id + ")");

        if (isBulbState == true) {
            System.out.println("De lamp is aan");
        } else {
            System.out.println("De lamp is uit");
        }

    }

    public int getIsDirtyCounter() {
        return isDirtyCounter;
    }

    public void setIsDirtyCounter(int isDirtyCounter) {
        this.isDirtyCounter = isDirtyCounter;
    }
}






