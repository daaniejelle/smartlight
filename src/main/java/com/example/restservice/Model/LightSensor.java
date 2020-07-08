package com.example.restservice.Model;

public class LightSensor {

    private String sensorManager;
    private String Light;
    private int minLux = 0;
    private int currentLux;
    private int maxLux;

    public LightSensor(String sensorManager, int currentLux) {
        this.sensorManager = sensorManager;
        this.currentLux = currentLux;
    }

    public String getSensorManager() {
        return sensorManager;
    }

    public void setSensorManager(String sensorManager) {
        this.sensorManager = sensorManager;
    }

    public int getCurrentLux() {
        return currentLux;
    }

    public void setCurrentLux(int currentLux) {
        this.currentLux = currentLux;
    }

    public int getMaxLux() {
        return maxLux;
    }

    public void setMaxLux(int maxLux) {
        this.maxLux = maxLux;
    }

    public void SensorActivity() {

    }

    public void onResume(int currentLux) {
        if (currentLux > 500 && currentLux < 11000) {
            System.out.println("Test: the light stays on");
        }
    }

    public void onHold(int currentLux) {
        if (currentLux >= 11000) {
            System.out.println("The light is turned off");
        }
    }

    public void on(int currentLux) {
        if (currentLux < 500) {
            System.out.println("The light turned on");
        }
    }

    public void onAccuracyChanged() {

    }

    public void onSensorChanged() {
    }

}

// Lux > 111000 is daylight
// Lux between 500 and 110000 is twilight
// Lux les than 500 is dark
// I made those figures up for now, i have to dig deeper into the exact lux numbers

//Correct Lux Numbers
// Condition Illumination (ftcd) (lux)
// Sunlight 10,000 107,527
// Full Daylight 1,000 10,752
// Overcast Day 100 1,075
// Very Dark Day 10 107
// Twilight 1 10.8
// Deep Twilight .1 1.08
// Full Moon .01 .108
// Quarter Moon .001 .0108
// Starlight .0001 .0011
// Overcast Night .00001 .0001