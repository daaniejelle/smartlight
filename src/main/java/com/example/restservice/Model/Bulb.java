package com.example.restservice.Model;

import java.awt.Color;

public class Bulb {

    private int bulbId;
    private boolean on;
    //private Color color;
    private String colorName;
    private String location;

    public Bulb(int id, boolean on, Color c, String cn, String location) {
        this.bulbId = id;
        this.on = on;
        //color = c;
        colorName = cn;
        this.location = location;
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

    //public Color getColor() {
     //   return color;
    //}

    //public void setColor(Color c) {
     //   color = c;
    //}

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



