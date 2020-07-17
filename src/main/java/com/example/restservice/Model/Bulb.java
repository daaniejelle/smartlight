package com.example.restservice.Model;

public class Bulb {

    private int bulbId;
    private boolean on;
    private String colorName;
    private String location;
    private int xPosition;
    private int yPosition;
    private boolean isDimmable;

    public Bulb(int id, boolean on, String cn, String location, int xPosition, int yPosition, boolean isDimmable) {
        this.bulbId = id;
        this.on = on;
        colorName = cn;
        this.location = location;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.isDimmable = isDimmable;
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



