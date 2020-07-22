package com.example.restservice.Model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "lighbulbs")
//@UniqueConstraint (columnNames = "id"))

public class BulbDatabase {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int bulbId;
    @Column(name = "true")
    private boolean on;
    @Column(name = "cn")
    private String colorName;
    @Column(name = "location")
    private String location;
    @Column(name = "xPosition")
    private int xPosition;
    @Column(name = "yPosition")
    private int yPosition;
    @Column(name = "true")
    private boolean isDimmable;
    @Column(name = "intensity")
    private int intensity;
    @NotBlank

    public BulbDatabase(){
        super();
    }

    public BulbDatabase(int id, boolean on, String cn, String location, int xPosition, int yPosition, boolean isDimmable, int intensity) {
        this.bulbId = id;
        this.on = on;
        colorName = cn;
        this.location = location;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.isDimmable = isDimmable;
        this.intensity = intensity;
    }

    public int getId() {
        return bulbId;
    }

    public void setId(int id) {
        this.bulbId = id;
    }

    public boolean isOn() {
        return on;
    }

    public boolean isOff() {
        return !on;
    }

    public String getcolorName() {
        return colorName;
    }

    public void setColorName(String cn) {
        colorName = cn;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void turnOn() {
        on = true;
    }

    public void turnOff() {
        on = false;
    }

    public int getxPosition () {return xPosition;}

    public int getyPosition () {return yPosition;}

    public boolean isDimmable() {
        return isDimmable;
    }

    public void setDimmable(boolean dimmable) {
        isDimmable = dimmable;
    }

    public int getIntensity() {
        return intensity;
    }

    public void setIntensity(int intensity) {
        this.intensity = intensity;
    }

    public String toString() {
        String result;
        if (on) {
            result = "The " + getcolorName() + " light is on.";
        }

        else {
            result = "The " + getcolorName() + " light is off.";

        }

        return result;

    }
}



